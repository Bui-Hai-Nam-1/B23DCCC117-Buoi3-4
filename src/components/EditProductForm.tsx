import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../redux/slices/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Giả sử bạn lấy dữ liệu từ Redux hoặc API
    // Giả sử dữ liệu lấy được có format { id, name, price }
    if (id) {
      // load sản phẩm từ Redux hoặc API theo id
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price > 0) {
      dispatch(editProduct({ id: Number(id), name, price }));
      navigate("/products");
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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductForm;
