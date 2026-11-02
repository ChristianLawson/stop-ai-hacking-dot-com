import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../App";
import { renderWithActor } from "./test-utils";

describe("StioAIhacking temporary home", () => {
  it.each([375, 1280])("shows the complete placeholder at %ipx", (width) => {
    window.innerWidth = width;
    renderWithActor(<App />, {});

    const header = screen.getByRole("banner");
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");
    expect(within(header).getByText("StioAIhacking.com")).toBeVisible();
    expect(
      within(main).getByRole("heading", {
        level: 1,
        name: /something new is taking shape/i,
      }),
    ).toBeVisible();
    expect(
      within(main).getByText(
        /this is a temporary home for StioAIhacking\.com/i,
      ),
    ).toBeVisible();
    expect(
      within(main).getByRole("heading", { level: 2, name: /in the meantime/i }),
    ).toBeVisible();
    expect(
      within(main).getByText(/this site is a temporary starting point/i),
    ).toBeVisible();
    expect(within(footer).getByText("A work in progress.")).toBeVisible();

    const image = within(main).getByRole("img", {
      name: /circuit boards and a vivid chartreuse disc/i,
    });
    expect(image).toHaveAttribute(
      "src",
      "/assets/generated/stio-signal-circuit.dim_1000x1250.png",
    );
    expect(image).toHaveAttribute("width", "1000");
    expect(image).toHaveAttribute("height", "1250");
  });

  it("offers a keyboard-reachable attribution link with visible-focus and hover treatments", async () => {
    const user = userEvent.setup();
    renderWithActor(<App />, {});

    const link = within(screen.getByRole("contentinfo")).getByRole("link", {
      name: /built with love using caffeine\.ai/i,
    });
    expect(link).toHaveAttribute(
      "href",
      expect.stringMatching(/^https:\/\/caffeine\.ai\?/),
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link.className).toContain("hover:underline");
    expect(link.className).toContain("focus-visible:outline");
    await user.tab();
    expect(link).toHaveFocus();
  });
});
