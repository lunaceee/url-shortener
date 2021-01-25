import React, { useState } from "react";
import sendUrl from "../api/sendUrl";
import getUrlList from "../api/getUrlList";

const UrlForm = ({ setUrlList }) => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [isError, setIsError] = useState(false);
  const [isMissingUrl, setIsMissingUrl] = useState(false);
  const [isErrorOnFormat, setIsErrorOnFormat] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (url.length === 0) {
      setIsMissingUrl(true);
      setTimeout(function () {
        setIsMissingUrl(false);
      }, 2000);
    } else {
      if (slug.length !== 0 && !slug.match(/[A-Za-z]{5}/)) {
        setIsErrorOnFormat(true);
        setTimeout(function () {
          setIsErrorOnFormat(false);
        }, 2000);
      } else {
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
    }
  }

  return (
    <>
      <form
        id="url-input-form"
        className="grid w-11/12 md:w-4/5 justify-items-center items-center max-h-48"
      >
        {isMissingUrl && (
          <p className="text-red-500 m-2">Please enter a URL!</p>
        )}
        {isError && (
          <p className="text-red-500 pb-2">
            URL already exists. Please enter a new one!
          </p>
        )}
        <fieldset className="grid gap-4">
          <input
            name="url"
            label="url"
            type="url"
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          {isErrorOnFormat && (
            <p className="text-red-500 max-w-md">
              Custom slug must be 5 consecutive uppercase or lowercase English
              characters.
            </p>
          )}
          <div className="flex flex-col">
            <p className="p-2 text-gray-700 text-xs">
              (Add an optional custom slug with 5 English characters, uppercase
              or lowercase)
            </p>
            <div className="flex items-center">
              <label className="pr-2">https://gb.com/</label>
              <input
                onChange={(e) => setSlug(e.target.value)}
                name="slug"
                placeholder="Custom slug (optional)"
                type="text"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
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
