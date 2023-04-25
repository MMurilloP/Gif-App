import { useState } from "react";
import AddCategory from "./componets/AddCategory";
import { v4 as uuidv4 } from "uuid";
import GifGrid from "./componets/GifGrid";
import Footer from "./componets/Footer";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory))
      return alert("La Categoria ya está añadida"); // hace que no se puedan repetir categorias.

    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  const reset = () => {
    setCategories ([])
  }

  return (
    <div className="app-container">
      <h1>Gif App</h1>
      <p className="explanation-title">**Busca el gif que quieras, introduciendolo abajo, ejem: Batman y pulsa enter**</p>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      <button className="css-button-arrow--black" onClick={reset}>Reset</button>

      {categories.map((category) => (
        <GifGrid 
            key={uuidv4()} 
            category={category} />
      ))}
      <Footer/>
    </div>
  );
};

export default GifExpertApp;
