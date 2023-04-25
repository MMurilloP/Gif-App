import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddCategory = ({ onNewCategory, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  // const onInputChanged = (event) => {
  //     setInputValue (event.target.value)
  // }

  const onInputChanged = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; // si inputvalue, no tiene mas de 1 caracter, no lo inserta en la lista

    onNewCategory(inputValue.trim()) // props del padre para rellenar la lista de caterogias con el valor del input.

    setInputValue("") // limpia el input una vez que hemos dado enter.
  };

  const reset = () => {
    setCategories ([])
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
      <button onSubmit={{onSubmit}} className="btn-search ">🔎</button>
      <button className="css-button-arrow--black" onClick={reset}>Reset</button>

    </form>

  );
};

export default AddCategory;
