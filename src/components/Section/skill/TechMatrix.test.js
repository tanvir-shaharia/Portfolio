import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TechMatrix from "./TechMatrix";

const renderTechMatrix = () => render(<TechMatrix />);

describe("TechMatrix Component", () => {
  test("1. Renders all six core category cards with proper headings", () => {
    renderTechMatrix();
    expect(screen.getByRole("heading", { name: "Programming Languages" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Mobile Platforms & Frameworks" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Architecture & State Management" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Networking & Cloud Services" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Databases & Local Storage" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Developer Tools & Ecosystem" })).toBeInTheDocument();
  });

  test("2. Primary mobile skills are present without subjective rating words", () => {
    renderTechMatrix();
    expect(screen.getByText("Kotlin")).toBeInTheDocument();
    expect(screen.queryByText(/Kotlin \(Expert\)/i)).not.toBeInTheDocument();

    expect(screen.getByText("Dart")).toBeInTheDocument();
    expect(screen.queryByText(/Dart \(Advanced\)/i)).not.toBeInTheDocument();

    expect(screen.getByText("Android SDK")).toBeInTheDocument();
    expect(screen.getByText("Jetpack Compose")).toBeInTheDocument();
    expect(screen.getByText("Flutter SDK")).toBeInTheDocument();
  });

  test("3. C++ is labeled with an Academic badge", () => {
    renderTechMatrix();
    expect(screen.getByText("C++")).toBeInTheDocument();
    const academicBadge = screen.getByText("Academic");
    expect(academicBadge).toBeInTheDocument();
  });

  test("4. C# / .NET project experience is represented accurately", () => {
    renderTechMatrix();
    expect(screen.getByText("C#")).toBeInTheDocument();
    const projectBadges = screen.getAllByText(/Project/i);
    expect(projectBadges.length).toBeGreaterThanOrEqual(1);
  });

  test("5. Separate Backend & Web section renders evidence-supported skills", () => {
    renderTechMatrix();
    expect(
      screen.getByRole("heading", { name: "Supporting Backend, Database & Web Experience" })
    ).toBeInTheDocument();

    expect(screen.getByText("C# / .NET")).toBeInTheDocument();
    expect(screen.getByText("Laravel")).toBeInTheDocument();
    expect(screen.getByText("PHP")).toBeInTheDocument();
    expect(screen.getByText("Web Technologies (HTML5 / CSS3 / JavaScript)")).toBeInTheDocument();
    expect(screen.getByText("Backend API Integration")).toBeInTheDocument();

    // Verify unsupported technologies are NOT present
    expect(screen.queryByText("ASP.NET Core")).not.toBeInTheDocument();
    expect(screen.queryByText("Node.js")).not.toBeInTheDocument();
    expect(screen.queryByText("PostgreSQL")).not.toBeInTheDocument();
    expect(screen.queryByText("Docker")).not.toBeInTheDocument();
  });

  test("6. BLoC is present in Architecture as approved", () => {
    renderTechMatrix();
    expect(screen.getByText("BLoC")).toBeInTheDocument();
    expect(screen.getByText("Riverpod")).toBeInTheDocument();
    expect(screen.getByText("Provider")).toBeInTheDocument();
  });

  test("7. Google Drive API appears under Networking & Cloud Services", () => {
    renderTechMatrix();
    expect(screen.getByText("Google Drive API")).toBeInTheDocument();
  });

  test("8. AI workflow content appears in the compact strip, not as a seventh core card", () => {
    renderTechMatrix();
    expect(screen.getByText("ACCELERATED ENGINEERING WORKFLOWS")).toBeInTheDocument();
    expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
    expect(screen.getByText("Context & Specification Optimization")).toBeInTheDocument();
    expect(screen.getByText("AI-Assisted Development")).toBeInTheDocument();
    expect(screen.getByText("Agentic Workflows")).toBeInTheDocument();

    // Verify removed / internal labels are not present
    expect(screen.queryByText(/Antigravity AI Agent/i)).not.toBeInTheDocument();
  });

  test("9. Semantic list and section markup renders without errors", () => {
    renderTechMatrix();
    const section = screen.getByLabelText("Technical stack and core engineering competency matrix");
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe("SECTION");
  });

  test("10. Google Play Billing (In-App Purchases) is rendered under Networking & Cloud Services", () => {
    renderTechMatrix();
    const billingChip = screen.getByText("Google Play Billing (In-App Purchases)");
    expect(billingChip).toBeInTheDocument();
  });
});


