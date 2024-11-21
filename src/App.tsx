import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import "./App.css";
import HuongDan from "./pages/Huongdan";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div>
              {/* Sử dụng NavLink để thêm class 'active' cho liên kết hiện tại */}
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) => (isActive ? "active-link" : "")}
              >
                Hướng dẫn
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }: { isActive: boolean }) => (isActive ? "active-link" : "")}
              >
                Quản lý hàng hóa
              </NavLink>
            </div>
          </div>

          {/* Nội dung chính */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HuongDan />} />
              <Route path="/huong-dan" element={<HuongDan />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
