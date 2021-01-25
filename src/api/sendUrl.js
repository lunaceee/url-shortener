const randomstring = require("randomstring");

const { REACT_APP_ACCESS_TOKEN } = process.env;

const sendUrl = async (url, slug) => {
  if (slug === "") {
    //If there's no given custom slug, generate a 5 character random string as the slug
    slug = randomstring.generate(5);
  }
  const data = {
    short_url: `http://bely.me/${slug}`,
    slug,
    url,
  };

  const response = await fetch("https://api.bely.me/links", {
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": REACT_APP_ACCESS_TOKEN,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    throw new Error("URL already existed.");
  }

  return response.json();
};

export default sendUrl;
