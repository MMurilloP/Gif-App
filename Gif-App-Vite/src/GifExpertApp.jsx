import { useState } from "react";
import AddCategory from "./componets/AddCategory";
import { v4 as uuidv4 } from "uuid";
import GifGrid from "./componets/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Spiderman",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory))
      return alert("La Categoria ya está añadida"); // hace que no se puedan repetir categorias.

    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif expert App</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid 
            key={uuidv4()} 
            category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
