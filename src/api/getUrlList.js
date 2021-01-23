const getUrlList = async () => {
  const response = await fetch("https://api.bely.me/links", {
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": "141332b3982ce6f66783a26efd64bdba",
    },
  });

  if (!response.ok) {
    throw new Error("Invalid response from the API");
  }

  return response.json();
};

export default getUrlList;
