import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MobileApps from './index';

const renderMobileApps = () => {
  return render(
    <BrowserRouter>
      <MobileApps />
    </BrowserRouter>
  );
};

describe('MobileApps Component', () => {
  test('renders PocketLog with Available on Google Play status and valid CTA link', () => {
    renderMobileApps();

    // Verify PocketLog app title is rendered
    expect(screen.getByText('PocketLog: Budget & Spending')).toBeInTheDocument();

    // Verify status badge on PocketLog card
    const availableBadges = screen.getAllByText('Available on Google Play');
    expect(availableBadges.length).toBeGreaterThanOrEqual(1);

    // Verify PocketLog CTA button and link
    const ctaLinks = screen.getAllByRole('link', { name: /view on google play/i });
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
    
    const pocketLogCta = ctaLinks.find(
      (link) => link.getAttribute('href') === 'https://play.google.com/store/apps/details?id=com.tanvir.pocketlog'
    );
    expect(pocketLogCta).toBeDefined();
    expect(pocketLogCta).toHaveAttribute('target', '_blank');
    expect(pocketLogCta).toHaveAttribute('rel', 'noopener noreferrer');

    // Confirm that "Currently in Google Play Closed Testing" or "Check Availability" does not appear for PocketLog
    expect(screen.queryByText(/currently in google play closed testing/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/check availability/i)).not.toBeInTheDocument();
  });

  test('keeps Trade Memo as Under Active Development with no Google Play CTA', () => {
    renderMobileApps();

    // Verify Trade Memo app title
    expect(screen.getByText('Trade Memo')).toBeInTheDocument();

    // Verify Trade Memo status badge
    expect(screen.getByText('Under Active Development')).toBeInTheDocument();

    // Trade Memo should not have any Google Play link
    const allLinks = screen.getAllByRole('link');
    const tradeMemoPlayLink = allLinks.find(
      (link) => link.getAttribute('href')?.includes('trade-memo') || link.getAttribute('href')?.includes('tradememo')
    );
    expect(tradeMemoPlayLink).toBeUndefined();
  });

  test('opens PocketLog details modal with Available on Google Play status and CTA', () => {
    renderMobileApps();

    // Click "View Details" for PocketLog (first "View Details" button)
    const viewDetailsButtons = screen.getAllByRole('button', { name: /view details/i });
    fireEvent.click(viewDetailsButtons[0]);

    // Check modal title
    expect(screen.getByRole('heading', { level: 2, name: /pocketlog/i })).toBeInTheDocument();

    // Check that modal displays "Available on Google Play"
    const modalAvailableBadges = screen.getAllByText('Available on Google Play');
    expect(modalAvailableBadges.length).toBeGreaterThanOrEqual(2); // Card + Modal

    // Check modal CTA link
    const modalCtaLinks = screen.getAllByRole('link', { name: /view on google play/i });
    const modalPocketLogCta = modalCtaLinks.find(
      (link) => link.getAttribute('href') === 'https://play.google.com/store/apps/details?id=com.tanvir.pocketlog'
    );
    expect(modalPocketLogCta).toBeDefined();

    // Verify modal does not have closed testing text
    expect(screen.queryByText(/production release is pending completion/i)).not.toBeInTheDocument();
  });
});
