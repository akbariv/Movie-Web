"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if(inputValue === ""){
        return router.push('/');
      }else{
        router.push(`/search/${keyword}`);
      } 
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Movie..."
        className="p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
        onChange={handleInputChange}
      />
      {inputValue === "" && (
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
