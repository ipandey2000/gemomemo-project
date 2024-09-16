import React from "react";

const MostTrending = () => {
  return (
    <div className="bg-yellow-100 border border-yellow-200 rounded-xl p-4 shadow-lg w-64 relative">
      {/* Online Status */}
      <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        <span>1200 Online</span>
      </div>

      {/* Game Details */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">World of Warcraft</h2>

        {/* Rating */}
        <div className="flex items-center mt-1 text-yellow-500">
          <span>⭐⭐⭐⭐</span>
          <span className="text-gray-400 ml-1">☆</span>
        </div>

        {/* Players, Genre */}
        <p className="mt-1 text-red-600 text-sm">
          10k+ Players • Action • Adventure
        </p>

        {/* Release Date */}
        <p className="text-gray-600 mt-2 text-sm">Released 10th August 2022</p>
      </div>

      {/* Price and Buy Button */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-2xl font-semibold text-gray-800">$48</p>
        <button className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MostTrending;
