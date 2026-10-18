import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("portfolio", () => {
  it("renders the main navigation and page sections", () => {
    render(<App />);
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /i build for the web/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projects with a purpose/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills, backed by practice/i })).toBeInTheDocument();
  });

  it("filters projects by category", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Frontend" }));
    const workSection = document.getElementById("work");
    expect(workSection).not.toBeNull();
    expect(within(workSection!).getByRole("heading", { name: "AniVerse" })).toBeInTheDocument();
    expect(within(workSection!).queryByRole("heading", { name: "StockWise" })).not.toBeInTheDocument();
  });

  it("exposes a skip link for keyboard users", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /skip to main content/i })).toHaveAttribute("href", "#main-content");
  });
});
