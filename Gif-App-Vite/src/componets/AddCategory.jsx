import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // const onInputChanged = (event) => {
  //     setInputValue (event.target.value)
  // }

  const onInputChanged = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; // si inputvalue, no tiene mas de 1 caracter, no lo inserta en la lista

    onNewCategory(inputValue.trim()) // props del padre para rellenar la lista de caterogias con el valor del input.

    setInputValue("") // limpia el input una vez que hemos dado enter.
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
};

export default AddCategory;
