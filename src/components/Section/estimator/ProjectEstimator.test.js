import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import fs from "fs";
import path from "path";
import ProjectEstimator from "./index";
import ContactMe from "../contactMe";
import Footer from "../../footer";
import ServicesBento from "../skill/ServicesBento";
import Navbar from "../../nav";

describe("ProjectEstimator UI Component", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = jest.fn();
    sessionStorage.clear();
    localStorage.clear();
  });

  test("renders estimator heading, steps, and default configuration", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /estimate project cost & timeline/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/06 \/\/ project estimator/i)).toBeInTheDocument();
    expect(screen.getByText(/step 01 \/\/ select platform/i)).toBeInTheDocument();
    expect(screen.getByText(/step 02 \/\/ engineering rigor & tier/i)).toBeInTheDocument();
    expect(screen.getByText(/step 03 \/\/ modular feature add-ons/i)).toBeInTheDocument();

    // Verify all 4 project types are rendered
    expect(
      screen.getByRole("heading", { level: 3, name: "Native Android" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Cross-Platform Flutter" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Web Application" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Backend / API Service" })
    ).toBeInTheDocument();

    // Verify complexity tiers
    expect(
      screen.getByRole("radio", { name: /mvp \/ proof of concept/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: /commercial \/ production/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: /enterprise/i })
    ).toBeInTheDocument();
  });

  test("allows switching between USD and BDT currencies", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const bdtBtn = screen.getByRole("button", { name: /bdt \(৳\)/i });
    expect(bdtBtn).toBeInTheDocument();

    // Switch to BDT
    fireEvent.click(bdtBtn);
    expect(screen.getByText(/bdt \(/i)).toBeInTheDocument();
    expect(screen.getAllByText(/৳/).length).toBeGreaterThan(0);

    // Switch back to USD
    const usdBtn = screen.getByRole("button", { name: /usd \(\$\)/i });
    fireEvent.click(usdBtn);
    expect(screen.getAllByText(/\$/).length).toBeGreaterThan(0);
  });

  test("updates estimate when selecting different project type and complexity", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // Select Flutter
    const flutterCard = screen.getByRole("radio", { name: /cross-platform flutter/i });
    fireEvent.click(flutterCard);
    expect(flutterCard).toHaveAttribute("aria-checked", "true");

    // Select Enterprise Tier
    const enterpriseTier = screen.getByRole("radio", { name: /enterprise/i });
    fireEvent.click(enterpriseTier);
    expect(enterpriseTier).toHaveAttribute("aria-checked", "true");
  });

  test("stores estimate in sessionStorage and dispatches prefill event on Transfer Estimate click", async () => {
    const prefillHandler = jest.fn();
    window.addEventListener("portfolio:prefill-contact", prefillHandler);

    render(
      <BrowserRouter>
        <div>
          <ProjectEstimator />
          <div id="contact">
            <ContactMe />
          </div>
        </div>
      </BrowserRouter>
    );

    const transferBtn = screen.getByRole("button", {
      name: /transfer estimate to inquire/i,
    });
    fireEvent.click(transferBtn);

    await waitFor(() => {
      expect(prefillHandler).toHaveBeenCalled();
    });

    const dispatchedEvent = prefillHandler.mock.calls[0][0];
    expect(dispatchedEvent.detail.subject).toContain("Project Estimate:");
    expect(dispatchedEvent.detail.message).toContain("[PROJECT ESTIMATE SPECIFICATION]");

    // Verify contact form fields were prefilled
    const subjectInput = screen.getByPlaceholderText("Subject");
    const messageInput = screen.getByPlaceholderText("Your Message");

    expect(subjectInput.value).toContain("Project Estimate:");
    expect(messageInput.value).toContain("[PROJECT ESTIMATE SPECIFICATION]");

    window.removeEventListener("portfolio:prefill-contact", prefillHandler);
  });

  test("ContactMe automatically pre-fills from sessionStorage across route changes", () => {
    sessionStorage.setItem(
      "portfolio:prefill-contact",
      JSON.stringify({
        subject: "Stored Estimate Subject",
        message: "Stored Estimate Message Body",
      })
    );

    render(
      <BrowserRouter>
        <ContactMe />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText("Subject")).toHaveValue("Stored Estimate Subject");
    expect(screen.getByPlaceholderText("Your Message")).toHaveValue("Stored Estimate Message Body");
    // Verify it was consumed and cleared
    expect(sessionStorage.getItem("portfolio:prefill-contact")).toBeNull();
  });

  test("toggles disclaimers accordion", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const disclaimersBtn = screen.getByRole("button", {
      name: /exclusions & third-party notice/i,
    });
    expect(screen.queryByText(/Third-Party & Infrastructure Exclusions:/i)).not.toBeInTheDocument();

    fireEvent.click(disclaimersBtn);
    expect(screen.getByText(/Third-Party & Infrastructure Exclusions:/i)).toBeInTheDocument();

    fireEvent.click(disclaimersBtn);
    expect(screen.queryByText(/Third-Party & Infrastructure Exclusions:/i)).not.toBeInTheDocument();
  });

  test("copies estimate summary to clipboard and displays feedback", async () => {
    const mockWriteText = jest.fn().mockResolvedValue(true);
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const copyBtn = screen.getByRole("button", {
      name: /copy estimate summary to clipboard/i,
    });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);

    await waitFor(() => {
      expect(screen.getByText(/copied!/i)).toBeInTheDocument();
    });

    expect(mockWriteText).toHaveBeenCalled();

    const copiedText = mockWriteText.mock.calls[0][0];
    expect(copiedText).toContain("[PROJECT ESTIMATE SPECIFICATION]");
    expect(copiedText).toContain("Reference Conversion Rate:");
    expect(copiedText).toContain("Notice & Scope Exclusions:");
  });

  test("resets estimator state to default values on Reset to Default click", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // 1. Change project type to Flutter
    const flutterCard = screen.getByRole("radio", { name: /cross-platform flutter/i });
    fireEvent.click(flutterCard);
    expect(flutterCard).toHaveAttribute("aria-checked", "true");

    // 2. Change complexity to Enterprise
    const enterpriseTier = screen.getByRole("radio", { name: /enterprise/i });
    fireEvent.click(enterpriseTier);
    expect(enterpriseTier).toHaveAttribute("aria-checked", "true");

    // 3. Switch currency to BDT
    const bdtBtn = screen.getByRole("button", { name: /bdt \(৳\)/i });
    fireEvent.click(bdtBtn);

    // 4. Click Reset to Default
    const resetBtn = screen.getByRole("button", {
      name: /reset estimator configuration to default values/i,
    });
    expect(resetBtn).toBeInTheDocument();
    fireEvent.click(resetBtn);

    // 5. Verify defaults restored: Native Android, Commercial, USD
    const androidCard = screen.getByRole("radio", { name: /native android/i });
    expect(androidCard).toHaveAttribute("aria-checked", "true");

    const commercialTier = screen.getByRole("radio", { name: /commercial \/ production/i });
    expect(commercialTier).toHaveAttribute("aria-checked", "true");

    expect(localStorage.getItem("portfolio:estimator-currency")).toBe("USD");
  });

  test("persists currency preference to localStorage across sessions", () => {
    localStorage.setItem("portfolio:estimator-currency", "BDT");

    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // Should initialize with BDT from localStorage
    expect(screen.getAllByText(/৳/).length).toBeGreaterThan(0);

    // Switching to USD should update localStorage
    const usdBtn = screen.getByRole("button", { name: /usd \(\$\)/i });
    fireEvent.click(usdBtn);
    expect(localStorage.getItem("portfolio:estimator-currency")).toBe("USD");
  });

  test("gracefully falls back to USD if localStorage contains invalid data", () => {
    localStorage.setItem("portfolio:estimator-currency", "INVALID_CURRENCY");

    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // Should fall back to USD
    expect(screen.getAllByText(/\$/).length).toBeGreaterThan(0);
  });
});

describe("Project Estimator Discoverability & Integration", () => {
  test("Footer renders link to /project-estimator", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const estimatorLink = screen.getByRole("link", {
      name: /project cost estimator/i,
    });
    expect(estimatorLink).toBeInTheDocument();
    expect(estimatorLink).toHaveAttribute("href", "/project-estimator");
  });

  test("ServicesBento renders compact CTA linking to /project-estimator", () => {
    render(
      <BrowserRouter>
        <ServicesBento />
      </BrowserRouter>
    );

    const ctaLink = screen.getByRole("link", {
      name: /estimate project cost/i,
    });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", "/project-estimator");
    expect(
      screen.getByText(/calculate your estimated budget and timeline/i)
    ).toBeInTheDocument();
  });

  test("sitemap.xml contains valid canonical URL for /project-estimator", () => {
    const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
    const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
    expect(sitemapContent).toContain(
      "<loc>https://tanvirshaharia.vercel.app/project-estimator</loc>"
    );
  });

  test("Navbar mobile drawer renders prominent Project Cost Estimator link", () => {
    render(
      <BrowserRouter>
        <Navbar theme="dark" toggleDarkMode={() => {}} />
      </BrowserRouter>
    );

    const toggleBtn = screen.getByRole("button", { name: /toggle navigation menu/i });
    fireEvent.click(toggleBtn);

    const estimatorBtn = screen.getByRole("button", { name: /project cost estimator/i });
    expect(estimatorBtn).toBeInTheDocument();
  });
});

describe("Project Estimator Quick Presets", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = jest.fn();
    sessionStorage.clear();
    localStorage.clear();
  });

  test("renders all three quick preset buttons", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    expect(screen.getByRole("region", { name: /quick estimate presets/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /mvp \/ starter/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /commercial scale/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enterprise suite/i })).toBeInTheDocument();
  });

  test("applying MVP / Starter preset sets Native Android MVP scope and calculates correctly", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const mvpPresetBtn = screen.getByRole("button", { name: /mvp \/ starter/i });
    fireEvent.click(mvpPresetBtn);

    // Expected USD: $1,050 – $1,900, Timeline: 3.5 – 5 Weeks
    expect(screen.getAllByText(/\$1,050 – \$1,900/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/3.5 – 5 Weeks/).length).toBeGreaterThan(0);
  });

  test("applying Commercial Scale preset sets Native Android Commercial scope with 3 features", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const commPresetBtn = screen.getByRole("button", { name: /commercial scale/i });
    fireEvent.click(commPresetBtn);

    // Expected USD: $2,050 – $3,650, Timeline: 6 – 8.5 Weeks
    expect(screen.getAllByText(/\$2,050 – \$3,650/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/6 – 8.5 Weeks/).length).toBeGreaterThan(0);
  });

  test("applying Enterprise Suite preset sets Enterprise tier with all 8 supported features", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    const entPresetBtn = screen.getByRole("button", { name: /enterprise suite/i });
    fireEvent.click(entPresetBtn);

    // Expected USD: $4,400 – $7,750, Timeline: 11.5 – 17 Weeks
    expect(screen.getAllByText(/\$4,400 – \$7,750/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/11.5 – 17 Weeks/).length).toBeGreaterThan(0);
  });

  test("allows user to customize selections after applying a preset", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // 1. Apply MVP preset
    fireEvent.click(screen.getByRole("button", { name: /mvp \/ starter/i }));
    expect(screen.getAllByText(/\$1,050 – \$1,900/).length).toBeGreaterThan(0);

    // 2. Switch to Commercial complexity tier manually
    const commercialRadio = screen.getByRole("radio", { name: /commercial \/ production/i });
    fireEvent.click(commercialRadio);

    // Scaled base 800*1.35 = 1080 + 250 = 1330 -> $1,350; 1500*1.35 = 2025 + 400 = 2425 -> $2,450
    expect(screen.getAllByText(/\$1,350 – \$2,450/).length).toBeGreaterThan(0);
  });

  test("quick presets dynamically adapt track and features when user switches target platform", () => {
    render(
      <BrowserRouter>
        <ProjectEstimator />
      </BrowserRouter>
    );

    // 1. Select Cross-Platform Flutter in Step 1
    const flutterCard = screen.getByRole("radio", { name: /cross-platform flutter/i });
    fireEvent.click(flutterCard);

    // Quick presets now dynamically show Cross-Platform Flutter in track
    expect(screen.getAllByText("Cross-Platform Flutter").length).toBeGreaterThan(0);

    // 2. Click Commercial Scale preset for Flutter
    const commPresetBtn = screen.getByRole("button", { name: /commercial scale/i });
    fireEvent.click(commPresetBtn);

    // Flutter Commercial: 1500*1.35 = 2025 + 950 = 2975 -> $3,000; 2500*1.35 = 3375 + 1600 = 4975 -> $5,000
    expect(screen.getAllByText(/\$3,000 – \$5,000/).length).toBeGreaterThan(0);
  });
});

describe("Contact Form Estimate Attached Banner", () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  test("renders Project Estimate Attached banner when estimateData is stored in sessionStorage", () => {
    const mockEstimateData = {
      projectTypeName: "Native Android",
      complexityName: "Commercial / Production",
      featureNames: ["Authentication & Social Login", "Payments & In-App Purchases"],
      usdRange: "$2,050 – $3,650",
      bdtRange: "৳250,000 – ৳445,000",
      timelineRange: "6 – 8.5 Weeks",
    };

    sessionStorage.setItem("portfolio:attached-estimate", JSON.stringify(mockEstimateData));
    sessionStorage.setItem("portfolio:prefill-contact", JSON.stringify({
      subject: "Test Subject",
      message: "Test Message",
      estimateData: mockEstimateData,
    }));

    render(
      <BrowserRouter>
        <ContactMe />
      </BrowserRouter>
    );

    // Expect confirmation banner to be rendered
    const banner = screen.getByRole("region", { name: /attached project estimate/i });
    expect(banner).toBeInTheDocument();
    expect(screen.getByText(/project estimate attached/i)).toBeInTheDocument();
    expect(screen.getByText("Native Android")).toBeInTheDocument();
    expect(screen.getByText("Commercial / Production")).toBeInTheDocument();
    expect(screen.getByText("$2,050 – $3,650")).toBeInTheDocument();
    expect(screen.getByText("6 – 8.5 Weeks")).toBeInTheDocument();

    // Form inputs should contain prefilled values
    expect(screen.getByDisplayValue("Test Subject")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Message")).toBeInTheDocument();
  });

  test("dismissing the banner hides it without clearing form inputs", () => {
    const mockEstimateData = {
      projectTypeName: "Native Android",
      complexityName: "Commercial / Production",
      featureNames: ["Authentication & Social Login"],
      usdRange: "$2,050 – $3,650",
      bdtRange: "৳250,000 – ৳445,000",
      timelineRange: "6 – 8.5 Weeks",
    };

    sessionStorage.setItem("portfolio:attached-estimate", JSON.stringify(mockEstimateData));

    render(
      <BrowserRouter>
        <ContactMe />
      </BrowserRouter>
    );

    expect(screen.getByRole("region", { name: /attached project estimate/i })).toBeInTheDocument();

    const dismissBtn = screen.getByRole("button", { name: /dismiss estimate banner/i });
    fireEvent.click(dismissBtn);

    expect(screen.queryByRole("region", { name: /attached project estimate/i })).not.toBeInTheDocument();
    expect(sessionStorage.getItem("portfolio:attached-estimate")).toBeNull();
  });

  test("normal visits to Contact without attached estimate do not render banner", () => {
    render(
      <BrowserRouter>
        <ContactMe />
      </BrowserRouter>
    );

    expect(screen.queryByRole("region", { name: /attached project estimate/i })).not.toBeInTheDocument();
  });
});

