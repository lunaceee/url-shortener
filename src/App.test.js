import { render, screen, cleanup, act } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

const emptyList = [];
const defaultList = [
  {
    url: "https://reactgo.com/clear-input-field-value-react/",
    slug: "hello",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("empty state", () => {
  it("should render empty message", async () => {
    await act(async () => render(<UrlList urlList={emptyList} />));
    expect(screen.getByText("No urls processed.")).toBeInTheDocument();
  });
});

describe("default state", () => {
  it("should load the url list", async () => {
    await act(async () => render(<UrlList urlList={defaultList} />));
    expect(screen.getByText("Delete")).toBeTruthy();
  });
});
