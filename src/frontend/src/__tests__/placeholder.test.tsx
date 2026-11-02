import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("StopAIHacking.com", () => {
  it("renders nothing from React because the page is static HTML", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toBe("");
  });
});
