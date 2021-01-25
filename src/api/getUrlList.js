const { REACT_APP_ACCESS_TOKEN } = process.env;

const getUrlList = async () => {
  const response = await fetch("https://api.bely.me/links", {
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": REACT_APP_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error("Invalid response from the API");
  }

  return response.json();
};

export default getUrlList;
