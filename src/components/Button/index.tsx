import React, { ReactNode, CSSProperties } from "react";
import "./index.css";

// Định nghĩa kiểu cho các props
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset"; // Các kiểu button hợp lệ
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large"; // Các kích thước button hợp lệ
  style?: CSSProperties; // Kiểu cho các style inline
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "medium",
  style,
}) => {
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${disabled ? "" : className} ${size}`} // Áp dụng class cho button
    >
      {children}
    </button>
  );
};

export default Button;
