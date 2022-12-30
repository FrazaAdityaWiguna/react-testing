import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet Render Correctly", () => {
  render(<Greet />);
  const helloText = screen.getByText(/hello/i);
  expect(helloText).toBeInTheDocument;
});

test("Greet Render must show name", () => {
  render(<Greet name="Fraza" />);
  const nameText = screen.getByText(/hello fraza/i);
  expect(nameText).toBeInTheDocument;
});
