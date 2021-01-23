const deleteUrl = async (slug) => {
  const myUrl = `https://api.bely.me/links/${slug}`;
  const response = await fetch(myUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": "141332b3982ce6f66783a26efd64bdba",
    },
  });
  const data = await response.text();
  return data;
};

export default deleteUrl;
