import React from "react";

const Arens = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative bg-black border border-gray-800 p-8 w-full max-w-5xl rounded-lg text-white">
        {/* Circular Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-gray-600"></div>

        {/* Title */}
        <div className="text-center mt-32">
          <h1 className="text-4xl font-bold">
            CHOOSE FROM MULTIPLE <span className="text-yellow-500">ARENAS</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Battle across an icy bridge as your team of random champions charge
            toward the enemy Nexus in this chaotically fun 5v5 game mode.
          </p>
        </div>

        {/* Arena Selection */}
        <div className="flex justify-center space-x-8 mt-10">
          <div className="w-32 h-32 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-center text-gray-400">Arena 1</p>
          </div>
          <div className="w-32 h-32 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-center text-gray-400">Arena 2</p>
          </div>
          <div className="w-32 h-32 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-center text-gray-400">Arena 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arens;
