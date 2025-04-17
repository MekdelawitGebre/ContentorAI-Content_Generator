import { Search } from 'lucide-react';
import React from 'react'

function SearchSection ({onSearchInput}:any){
  return (
    <div className="p-5 bg-gradient-to-r from-[#6A0DAD] via-[#8A2BE2] to-[#FF69B4] flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl font-bold mb-2">Explore All Models</h2>
      <p>What's on your mind to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5  w-[70%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search template..."
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
