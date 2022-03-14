import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Percentage calculator", () => {
  it("render a percentage calculator", () => {
    render(<App />);
    // check if components are rendered
    expect(screen.getByTestId("number")).toBeInTheDocument();
    expect(screen.getByTestId("outof")).toBeInTheDocument();
    expect(screen.getByTestId("result")).toBeInTheDocument();
  });
  it("should calculate percentage correctly", () => {
    render(<App />);
    // set input values
    fireEvent.change(screen.getByTestId("number"), {
      target: { value: 10 },
    });
    fireEvent.change(screen.getByTestId("outof"), {
      target: { value: 20 },
    });
    // click the button
    fireEvent.click(screen.getByTestId("button"));
    // check if the result is correct
    expect(screen.getByTestId("result").textContent).toBe("50");
  });
});
