import Link from "next/link";
import React from "react";

// Sample game data
const gamesData = [
  {
    id: 1,
    name: "World of Warcraft",
    online: "1200 Online",
    rating: 4,
    players: "10k+ Players • Action • Adventure",
    releaseDate: "Released 10th August 2022",
    price: "$48",
  },
  {
    id: 2,
    name: "The Witcher",
    online: "1200 Online",
    rating: 3,
    players: "10k+ Players • Action • Adventure",
    releaseDate: "Released 10th August 2022",
    price: "$48",
  },
  {
    id: 3,
    name: "Horizon",
    online: "1200 Online",
    rating: 4,
    players: "10k+ Players • Action • Adventure",
    releaseDate: "Released 10th August 2022",
    price: "$48",
  },
  {
    id: 4,
    name: "Valorant",
    online: "1200 Online",
    rating: 3,
    players: "10k+ Players • Action • Adventure",
    releaseDate: "Released 10th August 2022",
    price: "$48",
  },
];

const MostTrending = () => {
  return (
    <div
      className="bg-black 900 text-yellow-100 "
      style={{ paddingBottom: "100px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center py-8 px-12">
        <h1 className="text-4xl font-bold tracking-widest">MOST TRENDING</h1>
        <a
          href="#"
          className="text-lg font-semibold flex items-center space-x-2 text-white"
        >
          <span>GO TO GAME STORE</span>
          <span>&rarr;</span>
        </a>
      </div>

      {/* Game Cards */}
      <div className="flex overflow-x-auto px-12 space-x-8 scrollbar-hide">
        {gamesData.map((game) => (
          <div
            key={game.id}
            className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 shadow-lg w-64 relative"
          >
            {/* Online Status */}
            <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{game.online}</span>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800">{game.name}</h2>

              <div className="flex items-center mt-1 text-yellow-500">
                <span>{"⭐".repeat(game.rating)}</span>
                <span className="text-gray-400 ml-1">
                  {"☆".repeat(5 - game.rating)}
                </span>
              </div>

              <p className="mt-1 text-red-600 text-sm">{game.players}</p>

              <p className="text-gray-600 mt-2 text-sm">{game.releaseDate}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-semibold text-gray-800">
                {game.price}
              </p>
              <button className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600 transition">
                <Link href="/GemoMemoItemsPage"> Buy Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostTrending;
