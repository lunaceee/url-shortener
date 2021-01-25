import { useState, useEffect } from "react";
import getUrlList from "../api/getUrlList";
import deleteUrl from "../api/deleteUrl";
import Loader from "./Loader";

const UrlList = ({ urlList, setUrlList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUrlList()
      .then((data) => {
        setUrlList(data);
        setIsError(false);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setUrlList]);

  async function handleDelete(slug) {
    await deleteUrl(slug);
    await getUrlList()
      .then((data) => {
        setUrlList(data);
        setIsError(false);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      {isError && (
        <h2 className="text-3xl">
          We have problem getting the data, please wait for a while or contact
          support for help.
        </h2>
      )}
      {!isError && isLoading ? (
        <Loader />
      ) : (
        <ul className="mt-20 lg:mt-0 xl:mt-0 border-2 border-gray-900 rounded w-11/12 mx-2 p-2 xl:w-4/5 xl:justify-self-start h-80 overflow-scroll">
          {urlList.length === 0 ? (
            <li className="empty-state-message" data-testid="test">
              <h2 className="m-2">No urls processed.</h2>
            </li>
          ) : (
            urlList.map((urlObj) => (
              <li
                key={urlObj.slug}
                className="list-none flex justify-between items-center border-b-2 border-gray-300 py-2 mx-2 transition-all duration-300 ease-in-out"
              >
                <div>
                  <a
                    className="underline"
                    href={urlObj.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {urlObj.short_url}
                  </a>
                </div>
                <button
                  onClick={() => handleDelete(urlObj.slug)}
                  className="mt-2 px-4 py-2 bg-red-600 rounded hover:bg-red-400 text-white transition-all duration-300"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default UrlList;
