import React, { useState, ChangeEvent } from "react";

// Định nghĩa các kiểu dữ liệu cho props
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Tìm kiếm hàng hóa..."
      value={query}
      onChange={handleSearch}
      style={{ marginBottom: "15px", padding: "5px", width: "300px" }}
    />
  );
};

export default SearchBar;
