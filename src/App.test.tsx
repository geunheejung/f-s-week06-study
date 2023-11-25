import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { container } from "tsyringe";

test("renders App", () => {
  render(<App />);
});

const context = describe;

describe("App", () => {
  beforeEach(() => {
    // 실제 데이터를 지우진 않으며, 기본 값으로 초기화만 해줌
    container.clearInstances();
  });

  context("when press increse button once", () => {
    test("counter", () => {
      render(<App />);

      fireEvent.click(screen.getByTestId("IncreaseBtn"));

      expect(screen.getAllByText("Count: 1")).toHaveLength(2);
    });
  });

  context("when press increse button twice", () => {
    test("twice counter", () => {
      render(<App />);

      const inc = screen.getByTestId("IncreaseBtn");

      fireEvent.click(inc);
      fireEvent.click(inc);

      expect(screen.getAllByText("Count: 2")).toHaveLength(2);
    });
  });
});
