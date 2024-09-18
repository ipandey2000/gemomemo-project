import React from "react";

const Bigbanner = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Main content section */}
      <div className="flex flex-col items-center justify-center p-10 space-y-6">
        {/* Release Date and Rating */}
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
          <span className="text-sm text-gray-400">
            RELEASE DATE: 30TH DECEMBER
          </span>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★★★★☆</span>
          </div>
        </div>

        {/* Game Title */}
        <h1 className="text-5xl md:text-7xl font-bold">LEAGUE OF LEGENDS</h1>

        {/* Try For Free Button */}
        <button className="mt-4 py-3 px-6 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600">
          Try For Free
        </button>

        {/* Enrolled Players Info */}
        <span className="text-green-400 text-sm">
          245k players already enrolled
        </span>

        {/* iOS Available Icon */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Available on:</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-10 text-center space-y-4">
        <p className="text-lg leading-relaxed">
          Wild Rift! Built from the ground up for mobile-first PvP, Wild Rift is
          a 5v5 multiplayer online battle arena (MOBA) game with exciting action
          where your skills, strategy, and combat senses are put to the test.
          Wild Rift is packed with content and fresh features for the ultimate
          PvP multiplayer experience.
        </p>
        <p className="text-lg leading-relaxed">
          Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and
          diverse 5v5 gameplay. Team up with friends, lock in your champion, and
          play to win!
        </p>
      </div>

      {/* Choose Your Champion Section */}
      <div className="bg-gray-800 p-10 text-center">
        <h2 className="text-3xl font-semibold text-yellow-500">
          CHOOSE YOUR CHAMPION
        </h2>
        <p className="text-lg leading-relaxed mt-4">
          Whether you like to dive straight into the fray, support your
          teammates, or something in between, there a spot for you on the Rift.
        </p>
      </div>
    </div>
  );
};

export default Bigbanner;
