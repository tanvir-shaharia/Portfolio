import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CredentialsGrid from './CredentialsGrid';

describe('CredentialsGrid Component', () => {
  test('renders academic education and professional certifications headers', () => {
    render(<CredentialsGrid />);
    expect(screen.getByRole('heading', { name: /Academic & Professional Credentials/i })).toBeInTheDocument();
    expect(screen.getByText(/EDUCATION & ACADEMICS/i)).toBeInTheDocument();
    expect(screen.getByText(/CERTIFICATIONS & SPECIALIZATIONS/i)).toBeInTheDocument();
  });

  test('displays Northern University Bangladesh degree with 2023 – 2027 dates', () => {
    render(<CredentialsGrid />);
    expect(screen.getByText(/Northern University Bangladesh/i)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Science/i)).toBeInTheDocument();
    expect(screen.getByText(/2023 – 2027/i)).toBeInTheDocument();
  });

  test('displays Rajshahi Polytechnic Institute diploma with verified CGPA', () => {
    render(<CredentialsGrid />);
    expect(screen.getByText(/Rajshahi Polytechnic Institute/i)).toBeInTheDocument();
    expect(screen.getByText(/Diploma in Engineering in Computer Science Technology/i)).toBeInTheDocument();
    expect(screen.getByText(/CGPA: 3.54 \/ 4.00/i)).toBeInTheDocument();
  });

  test('provides working link to verified prompt engineering certificate PDF', () => {
    render(<CredentialsGrid />);
    const link = screen.getByRole('link', { name: /View Prompt Engineering Credential \(PDF\)/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('/prompt-engineering-dark.pdf'));
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('displays Master.dev verified Java Fundamentals certificate with theme-adaptive PDF link', () => {
    render(<CredentialsGrid />);
    expect(screen.getByText(/Java Fundamentals & Object-Oriented Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Angie Jones/i)).toBeInTheDocument();
    expect(screen.getByText('Core Java')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /View Java Fundamentals Credential \(PDF\)/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('/java-dark.pdf'));
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('displays Creative IT Institute verified Android certificate', () => {
    render(<CredentialsGrid />);
    expect(screen.getByText(/Creative IT Institute/i)).toBeInTheDocument();
    expect(screen.getByText(/Professional Certificate in Android App Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Verified Credential/i)).toBeInTheDocument();
  });
});
