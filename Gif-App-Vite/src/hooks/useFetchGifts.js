import { useEffect } from "react";
import { useState } from "react";

import getGifs from "../helpers/getFecht";

const useFetchGifts = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);



  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);


  return {
    images: images,
    isLoading: isLoading
  };
};

export default useFetchGifts;
