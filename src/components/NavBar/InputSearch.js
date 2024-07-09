"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchRef.current.value);
  }

  return (
    <div className="relative">
      <input
        placeholder="Search Movie..."
        className="p-2 rounded"
        ref={searchRef}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
