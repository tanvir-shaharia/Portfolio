import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResumeDownloadBtn from "./ResumeDownloadBtn";

describe("ResumeDownloadBtn Component Accessibility & Interactions", () => {
  test("renders closed dropdown trigger button with appropriate ARIA attributes", () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("toggles menu open on button click and renders menuitems", () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();

    const items = screen.getAllByRole("menuitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent(/android native resume/i);
    expect(items[1]).toHaveTextContent(/flutter resume/i);
  });

  test("closes menu on Escape key press and restores focus to trigger button", async () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });

    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("supports opening with ArrowDown key on trigger and sets focus", async () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(screen.getByRole("menu")).toBeInTheDocument();

    await waitFor(() => {
      const items = screen.getAllByRole("menuitem");
      expect(items[0]).toHaveFocus();
    });
  });

  test("supports keyboard navigation with ArrowDown and ArrowUp between items", async () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });

    fireEvent.click(trigger);
    const items = screen.getAllByRole("menuitem");

    // Focus first item
    items[0].focus();
    expect(items[0]).toHaveFocus();

    // ArrowDown moves to second item
    fireEvent.keyDown(items[0], { key: "ArrowDown" });
    expect(items[1]).toHaveFocus();

    // ArrowDown wraps back to first item
    fireEvent.keyDown(items[1], { key: "ArrowDown" });
    expect(items[0]).toHaveFocus();

    // ArrowUp wraps to last item
    fireEvent.keyDown(items[0], { key: "ArrowUp" });
    expect(items[1]).toHaveFocus();
  });

  test("closes menu on click outside", async () => {
    render(
      <div>
        <div data-testid="outside-element">Outside</div>
        <ResumeDownloadBtn />
      </div>
    );

    const trigger = screen.getByRole("button", { name: /download resume/i });
    fireEvent.click(trigger);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside-element"));

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  test("clicking resume link closes the menu and returns focus to trigger", async () => {
    render(<ResumeDownloadBtn />);
    const trigger = screen.getByRole("button", { name: /download resume/i });

    fireEvent.click(trigger);
    const items = screen.getAllByRole("menuitem");

    fireEvent.click(items[0]);

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });
});
