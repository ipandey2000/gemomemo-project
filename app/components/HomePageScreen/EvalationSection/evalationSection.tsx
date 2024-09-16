import React from "react";

const EvalationSection = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto space-y-6 relative">
      {/* Top Right - Friends Playing Status and Rating */}
      <div className="absolute top-6 right-6 flex items-center space-x-4">
        <div className="flex items-center text-green-400 space-x-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          <span>40 of your friends are playing</span>
        </div>
        <div className="flex items-center space-x-1 text-orange-500">
          <span>⭐⭐⭐</span>
          <span className="text-gray-400">☆</span>
        </div>
      </div>

      {/* Game Title */}
      <h1 className="text-6xl font-bold mb-2">Evolution</h1>

      {/* Release Date */}
      <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md inline-block">
        <span className="text-sm">RELEASE DATE : 30TH DECEMBER</span>
      </div>

      {/* Game Description */}
      <p className="text-lg leading-relaxed">
        Players assume the role of Deacon St. John, a former bounty hunter
        struggling to survive in a post-apocalyptic world filled with
        zombie-like creatures called Freaks. Though players are surrounded by
        death and danger on all sides, the world that they get to explore feels
        as though it's truly alive, which can encourage players to take risks
        when they probably shouldn't.
      </p>

      {/* CTA Buttons and Platform Availability */}
      <div className="flex items-center space-x-6">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition">
          Play Now
        </button>
        <span className="text-gray-400">Available on :</span>
        <div className="flex space-x-2">
          <img src="/ios.png" alt="iOS" className="w-8 h-8" />
          <img src="/windows.png" alt="Windows" className="w-8 h-8" />
        </div>
      </div>

      {/* Purchase Price */}
      <div className="mt-4">
        <span className="text-xl text-white">Buy now for $40 only</span>
      </div>
    </div>
  );
};

export default EvalationSection;
