import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="searchinput"
        type="text"
        placeholder="Please enter name or phone number to search. 🔎"
      ></input>
    </div>
  );
}

export default SearchBar;
