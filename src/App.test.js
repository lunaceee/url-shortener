import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Grab the shorty text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Grab the shorty/i);
  expect(linkElement).toBeInTheDocument();
});
