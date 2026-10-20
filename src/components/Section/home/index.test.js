import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import HomeHero from "./index";

describe("Home Hero Component & CTAs", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = jest.fn();
  });

  test("renders all three CTAs with proper labels, navigation links, and icons", () => {
    render(
      <BrowserRouter>
        <HomeHero />
      </BrowserRouter>
    );

    // 1. Start a Project CTA
    const startProjectBtn = screen.getByRole("link", { name: /start a project/i });
    expect(startProjectBtn).toBeInTheDocument();
    expect(startProjectBtn).toHaveAttribute("href", "#contact");

    // 2. Resume Download CTA
    const resumeBtn = screen.getByRole("button", { name: /download resume/i });
    expect(resumeBtn).toBeInTheDocument();

    // 3. Estimate Project Cost CTA (navigates to standalone /project-estimator route)
    const estimatorBtn = screen.getByRole("link", { name: /estimate project cost/i });
    expect(estimatorBtn).toBeInTheDocument();
    expect(estimatorBtn).toHaveAttribute("href", "/project-estimator");
    expect(screen.getByText("calculate")).toBeInTheDocument();
  });
});
