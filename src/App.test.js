import {
  render,
  screen,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import React from "react";
import { shallow, mount } from "enzyme";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import getUrlList from "./api/getUrlList";

const emptyList = [];
const defaultList = [
  {
    url: "https://reactgo.com/clear-input-field-value-react/",
    slug: "hello",
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

describe("empty state", () => {
  it("should render empty message", async () => {
    fetch.mockResponseOnce(JSON.stringify(emptyList));
    // screen.debug();
    await act(async () =>
      render(<UrlList urlList={emptyList} setUrlList={() => true} />)
    );

    expect(screen.getByText("No urls processed.")).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("default state", () => {
  it("should load the url list", async () => {
    await act(async () => render(<UrlList urlList={defaultList} />));
    expect(screen.getByText("Delete")).toBeTruthy();
  });

  it("should call the setUrlList hook", async () => {
    const setUrlList = jest.fn();
    await act(async () => render(<App onClick={setUrlList} />));

    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((urlList) => {
      console.log("llllll");
      return [urlList, setUrlList];
    });
    fireEvent.change(screen.getByPlaceholderText("https://example.com"), {
      target: { value: "http://www.yyyyy.com" },
    });
    fireEvent.click(screen.getByText(/Grab the shorty/));
    screen.debug();

    expect(setUrlList).toHaveBeenCalledTimes(1);
  });
});

/*
const setUrlList = jest.fn();
const wrapper = mount(<App />);
const handleClick = jest.spyOn(React, "useState");
handleClick.mockImplementation((urlList) => [urlList, setUrlList]);
*/
