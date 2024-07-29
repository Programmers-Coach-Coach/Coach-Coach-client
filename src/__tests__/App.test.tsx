import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
