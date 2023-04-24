import { useEffect } from "react";
import getGifs from "../helpers/getFecht";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GiftItem from "./GiftItem";


// eslint-disable-next-line react/prop-types
const GrifGrid = ({ category }) => {

  const [images, setImages] =useState([])

  const getImages = async() => {
    const newImages = await getGifs (category);
    setImages(newImages)
  }

    useEffect( () => {
      getImages()

    }, [] )



  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map((image) => (
            <GiftItem 
              key ={uuidv4()}
              { ...image }
            />
          ))
        }
        
      </div>

    </>
  );
};

export default GrifGrid;
