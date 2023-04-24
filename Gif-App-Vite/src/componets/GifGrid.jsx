
import { v4 as uuidv4 } from "uuid";
import GiftItem from "./GiftItem";
import useFetchGifts from "../hooks/useFetchGifts";

// eslint-disable-next-line react/prop-types
const GrifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifts (category);


  return (
    <>
      <h3 className="input-value">{category}</h3>
      {
        isLoading ? <h2>Cargando...</h2> : null

      }
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
