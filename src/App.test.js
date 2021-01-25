import {
  render,
  screen,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

const emptyList = [];
const defaultList = [
  {
    url: "https://tailwindcss.com/docs/justify-items",
    slug: "hello",
  },
];

afterEach(cleanup);

describe("empty state", () => {
  it("should render empty message", async () => {
    await act(async () => render(<UrlList urlList={emptyList} />));
    expect(screen.getByText("No urls processed.")).toBeInTheDocument();
  });

  it("should have empty input fields", async () => {
    await act(async () => render(<UrlForm />));
    expect(screen.getByPlaceholderText("https://example.com").value).toBe("");
  });
});

describe("default state", () => {
  it("should load the url list", async () => {
    await act(async () => render(<UrlList urlList={defaultList} />));
    expect(screen.getByText("Delete")).toBeTruthy();
  });
});
