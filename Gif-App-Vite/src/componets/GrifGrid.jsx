import { useState } from "react";
import getGifs from "../helpers/getFecht";


// eslint-disable-next-line react/prop-types
const GrifGrid = ({ category }) => {
    const [counter, setCounter] = useState(10)


    //esta funcion esta dentro del helpers getFetch.js
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};

export default GrifGrid;
