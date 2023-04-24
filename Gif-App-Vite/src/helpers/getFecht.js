const apiKey = "lPgxMyMy3nSzqR11P3rQkeAZ7bI3WxUc";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    url: img.images.downsized_medium.url,
    title: img.title,
  }));
  return gifs
};

export default getGifs