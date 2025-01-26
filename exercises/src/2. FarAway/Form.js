import { useState } from "react";

const Form = () => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() }

    setQuantity(1);
    setDescription("");
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip 😍</h3>
    <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
      {
        Array.from({ length : 20}, (_, index) => index + 1)
        .map((number) =>
          <option value={number} key={number}>{number}</option>)
      }
    </select>
    <input 
      type="text"
      placeholder="Item description"
      value={description}
      onChange={(event) => setDescription(event.target.value)}
    />
    <button>Add</button>
  </form>
};

export { Form };