import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactMe from './index';
import swal from 'sweetalert';

jest.mock('sweetalert');
global.fetch = jest.fn();

describe('ContactMe Component (Gmail SMTP)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form fields correctly', () => {
    render(<ContactMe />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your phone number (optional)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('handles successful Gmail SMTP email sending', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Email delivered successfully via Gmail SMTP!' }),
    });
    swal.mockResolvedValueOnce(true);

    render(<ContactMe />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Test message body' } });

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:5000/api/send-email',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from_name: 'John Doe',
            email: 'john@example.com',
            phone: '',
            subject: 'Test Subject',
            message: 'Test message body'
          })
        })
      );
    });

    await waitFor(() => {
      expect(swal).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'E-mail sent successfully!',
          icon: 'success'
        })
      );
    });

    expect(screen.getByText('Thank You !')).toBeInTheDocument();
  });

  test('handles Gmail SMTP failure without incorrectly showing thank you screen', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false, error: 'SMTP Auth Error' }),
    });
    swal.mockResolvedValueOnce(true);

    render(<ContactMe />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Test message body' } });

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(swal).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Message Delivery Failed',
          icon: 'error'
        })
      );
    });

    // Form should still be visible, NOT hidden by false positive thank you screen
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.queryByText('Thank You !')).not.toBeInTheDocument();
  });
});
