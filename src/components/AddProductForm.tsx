import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";

interface AddProductFormProps {
  initialData?: { name: string; price: number };
}

const AddProductForm: React.FC<AddProductFormProps> = ({ initialData }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialData?.name || "");
  const [price, setPrice] = useState(initialData?.price || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price > 0) {
      dispatch(addProduct({ id: Date.now(), name, price }));
      setName("");
      setPrice(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
