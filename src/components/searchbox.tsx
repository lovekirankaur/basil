import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Searchbox() {
  return (
    <div className="flex items-center bg-white w-1/3 h-9 border border-zinc-200 rounded-md ">
      <FaSearch className="text-zinc-400 text_s ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="ml-3 bg-transparent outline-none placeholder-zinc-400 text-sm "
      />
    </div>
  );
}
 