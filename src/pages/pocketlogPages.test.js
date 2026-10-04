import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import PocketLogPrivacy from './pocketlogPrivacy';
import PocketLogTerms from './pocketlogTerms';
import App from '../App';

describe('PocketLog Privacy & Terms Pages', () => {
  beforeAll(() => {
    // Mock window.scrollTo for jsdom
    window.scrollTo = jest.fn();
  });

  test('renders PocketLog Privacy Policy with v2.0.0 metadata, headings, and permissions table', () => {
    render(
      <BrowserRouter>
        <PocketLogPrivacy />
      </BrowserRouter>
    );

    // Verify Title and Subtitle (Title component renders h1)
    expect(screen.getByRole('heading', { level: 1, name: /pocketlog privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/version: 2\.0\.0/i)).toBeInTheDocument();

    // Verify Link to Terms of Service
    const termsLink = screen.getByRole('link', { name: /view terms of service/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/pocketlog/terms');

    // Verify Core Sections
    expect(screen.getByText(/1\. Introduction & Developer Identity/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Inaccuracies Addressed in this Updated Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Android Permissions Declared & Justifications/i)).toBeInTheDocument();
    expect(screen.getByText(/12\. Summary Table of Data Handling Practices/i)).toBeInTheDocument();

    // Verify Permissions Table Content
    const internetPerms = screen.getAllByText('android.permission.INTERNET');
    expect(internetPerms.length).toBeGreaterThanOrEqual(1);

    const networkPerms = screen.getAllByText('android.permission.ACCESS_NETWORK_STATE');
    expect(networkPerms.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText('android.permission.POST_NOTIFICATIONS')).toBeInTheDocument();
  });

  test('renders PocketLog Terms of Service with disclaimer, sections, and privacy link', () => {
    render(
      <BrowserRouter>
        <PocketLogTerms />
      </BrowserRouter>
    );

    // Verify Title and Subtitle (Title component renders h1)
    expect(screen.getByRole('heading', { level: 1, name: /pocketlog terms of service/i })).toBeInTheDocument();
    expect(screen.getByText(/version: 2\.0\.0/i)).toBeInTheDocument();

    // Verify Link to Privacy Policy
    const privacyLinks = screen.getAllByRole('link', { name: /privacy policy/i });
    expect(privacyLinks.length).toBeGreaterThanOrEqual(1);
    expect(privacyLinks[0]).toHaveAttribute('href', '/pocketlog/privacy');

    // Verify Crucial Banking Disclaimer
    expect(screen.getByText(/pocketlog is not a bank/i)).toBeInTheDocument();

    // Verify Core Sections
    expect(screen.getByText(/1\. Agreement to Terms/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Description of the Service & Non-Financial Institution Disclaimer/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Disclaimer of Warranties/i)).toBeInTheDocument();
    expect(screen.getByText(/9\. Limitation of Liability/i)).toBeInTheDocument();
    expect(screen.getByText(/13\. Governing Law & Jurisdiction/i)).toBeInTheDocument();
  });

  test('routes to /pocketlog/privacy and /pocketlog/terms without 404 in App', () => {
    // Test Privacy route in App
    const { unmount } = render(
      <MemoryRouter initialEntries={['/pocketlog/privacy']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText('PocketLog Privacy Policy').length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
    unmount();

    // Test Terms route in App
    render(
      <MemoryRouter initialEntries={['/pocketlog/terms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText('PocketLog Terms of Service').length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
});
