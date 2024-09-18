import Link from "next/link";
import { useState } from "react";

const FilterSidebar: React.FC = () => {
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
    {
      id: 5,
      name: "Cyberpunk 2077",
      online: "800 Online",
      rating: 4,
      players: "15k+ Players • RPG • Sci-Fi",
      releaseDate: "Released 10th December 2020",
      price: "$60",
    },
    {
      id: 6,
      name: "Assassin's Creed Valhalla",
      online: "900 Online",
      rating: 4,
      players: "20k+ Players • RPG • Action",
      releaseDate: "Released 10th November 2020",
      price: "$60",
    },
    {
      id: 7,
      name: "Call of Duty: Warzone",
      online: "1500 Online",
      rating: 5,
      players: "30k+ Players • FPS • Battle Royale",
      releaseDate: "Released 10th March 2020",
      price: "Free",
    },
    {
      id: 8,
      name: "Among Us",
      online: "3000 Online",
      rating: 5,
      players: "20k+ Players • Party • Multiplayer",
      releaseDate: "Released 15th June 2018",
      price: "$5",
    },
    {
      id: 9,
      name: "Minecraft",
      online: "5000 Online",
      rating: 5,
      players: "50k+ Players • Sandbox • Adventure",
      releaseDate: "Released 18th November 2011",
      price: "$26",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-wrap lg:flex-nowrap space-x-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/5 bg-gray-800 p-6 rounded-lg h-auto">
            <div className="text-white">
              {/* Categories */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul>
                  {[
                    "Indy",
                    "Adventure",
                    "MMO",
                    "Action",
                    "Strategy",
                    "Simulator",
                    "Sports",
                  ].map((category) => (
                    <li key={category} className="mb-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-500"
                        />
                        <span>{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platforms */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Platforms</h2>
                <ul>
                  {[
                    "PlayStation 5",
                    "PlayStation 4",
                    "Xbox Series",
                    "Nintendo Switch",
                  ].map((platform) => (
                    <li key={platform} className="mb-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-500"
                        />
                        <span>{platform}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Type */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Type</h2>
                <ul>
                  {["Paid", "Free"].map((type) => (
                    <li key={type} className="mb-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-500"
                        />
                        <span>{type}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Price</h2>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="0"
                    className="bg-gray-700 p-2 rounded-lg text-black w-16"
                    placeholder="40"
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="number"
                    min="0"
                    className="bg-gray-700 p-2 rounded-lg text-black w-16"
                    placeholder="55"
                  />
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Ratings</h2>
                <ul>
                  {[4, 3, 2, 1].map((rating) => (
                    <li key={rating} className="mb-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-500"
                        />
                        <span>{"⭐".repeat(rating)} & Up</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content - Search Results */}
          <main className="w-full lg:w-4/5">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Search results for “Valorant”
              </h2>
              <p className="text-gray-400">30 results found</p>
            </div>

            {/* Game Card Grid */}
            <div className="flex flex-wrap gap-8 px-4 lg:px-12">
              {gamesData.map((game) => (
                <div
                  key={game.id}
                  className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 shadow-lg flex flex-col relative w-full sm:w-80 md:w-64"
                >
                  {/* Online Status */}
                  <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{game.online}</span>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {game.name}
                    </h2>

                    <div className="flex items-center mt-1 text-yellow-500">
                      <span>{"⭐".repeat(game.rating)}</span>
                      <span className="text-gray-400 ml-1">
                        {"☆".repeat(5 - game.rating)}
                      </span>
                    </div>

                    <p className="mt-1 text-red-600 text-sm">{game.players}</p>

                    <p className="text-gray-600 mt-2 text-sm">
                      {game.releaseDate}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-semibold text-gray-800">
                      {game.price}
                    </p>
                    <button className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600 transition">
                      <Link href="/GamememoDetails"> Buy Now</Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Section */}
            <div className="mt-8 flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Checkout games similar to “Valorant”
              </h3>
              <a href="#" className="text-orange-500 font-bold">
                VIEW ALL ➜
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
