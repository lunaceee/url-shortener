const { REACT_APP_ACCESS_TOKEN } = process.env;

const deleteUrl = async (slug) => {
  const myUrl = `https://api.bely.me/links/${slug}`;
  const response = await fetch(myUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": REACT_APP_ACCESS_TOKEN,
    },
  });
  const data = await response.text();
  return data;
};

export default deleteUrl;
