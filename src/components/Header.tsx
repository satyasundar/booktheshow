import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-600 mr-8">BookTheShow</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for movies, events, plays, sports and activities"
              className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
            Sign In
          </button>
          <Menu className="ml-4 text-gray-600 cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
