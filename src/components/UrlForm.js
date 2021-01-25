import React, { useState } from "react";
import sendUrl from "../api/sendUrl";
import getUrlList from "../api/getUrlList";

const UrlForm = ({ setUrlList }) => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeUrl = (e) => {
    setIsError(false);
    setUrl(e.target.value);
  };

  const handleChangeSlug = (e) => {
    setSlug(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await sendUrl(url, slug)
      .then((data) => {
        setIsError(false);
        if (data[url] === url) {
          setIsError(true);
        }
        document.getElementById("url-input-form").reset();
        return data;
      })
      .catch((e) => {
        console.error(e);
        setIsError(true);
      });

    await getUrlList()
      .then((data) => {
        setUrlList(data);
      })
      .catch((e) => console.error(e));
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="url-input-form"
        className="grid mt-4 w-11/12 md:w-4/5 justify-items-center items-center max-h-48"
      >
        {isError && (
          <p className="text-red-500 pb-2">
            URL already exists. Please enter a new one!
          </p>
        )}
        <fieldset className="grid gap-2">
          <label>Enter a URL:</label>
          <input
            id="url"
            name="url"
            type="url"
            placeholder="https://example.com"
            onChange={handleChangeUrl}
            required
          />
          <div className="flex flex-col">
            <p className="p-2 text-gray-700 text-xs">
              (Add an optional custom slug with 5 alphanumeric characters)
            </p>
            <div className="flex items-center">
              <label className="pr-2">https://gb.com/</label>
              <input
                id="slug"
                onChange={handleChangeSlug}
                name="slug"
                placeholder="Custom slug (optional)"
                type="text"
                pattern="[a-zA-Z0-9]{5}"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full h-12 px-4 py-2 bg-blue-500 rounded hover:bg-blue-300 text-white transition-all duration-300"
          >
            Grab the shorty
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default UrlForm;
