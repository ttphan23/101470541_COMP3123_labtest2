import React from "react";

function SearchBar({ city, onCityChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
