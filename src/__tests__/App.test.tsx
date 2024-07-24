import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders Vite and React logos", () => {
  render(<App />);
  const viteLogo = screen.getByAltText("Vite logo");
  const reactLogo = screen.getByAltText("React logo");
  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /count is/i });
  expect(button).toHaveTextContent("count is 0");
  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});

test("renders learn more links", () => {
  render(<App />);
  const viteLink = screen.getByRole("link", { name: /vite/i });
  const reactLink = screen.getByRole("link", { name: /react/i });
  expect(viteLink).toHaveAttribute("href", "https://vitejs.dev");
  expect(reactLink).toHaveAttribute("href", "https://react.dev");
});
