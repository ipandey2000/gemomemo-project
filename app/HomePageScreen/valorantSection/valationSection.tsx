import React from "react";
import Image from 'next/image';
import Logo from '../../../public/Frame 398.png'
import { FaWindows, FaApple } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const VlationSection = () =>
{
  return (
    <div className="bg-black text-white py-10 px-8">
      {/* Container for main content */}
      <div className="relative flex flex-col justify-center items-start max-w-4xl mx-auto space-y-8">

        {/* Friends and Ratings */}
        <div className="absolute top-0 right-0 flex space-x-4 items-center text-sm">
          <div className="flex items-center text-green-400 space-x-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>40 of your friends are playing</span>
          </div>
          <div className="flex space-x-1 text-orange-500 items-center">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
          </div>
        </div>

        {/* Game Title */}
        <h1 className="text-7xl font-bold">Valorant</h1>

        {/* Release Date */}
        <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md inline-block">
          <span className="text-sm">RELEASE DATE: 30TH DECEMBER</span>
        </div>

        {/* Game Description */}
        <p className="text-lg leading-relaxed max-w-2xl" style={{ lineHeight: "40px" }}>
          Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
        </p>

        {/* CTA Button and Platform Availability */}
        <div className="flex items-center space-x-6">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition">
            Play Now
          </button>
          <span className="text-gray-400">Available on:</span>
          <div className="flex items-center space-x-2">
            <FaWindows className="text-3xl text-white" />
            <FaApple className="text-3xl text-white" />
            <span className="text-lg text-white">iOS</span>
          </div>
        </div>

        {/* Purchase Price */}
        <div className="mt-4">
          <span className="text-xl text-white">Buy now for $40 only</span>
        </div>
      </div>
    </div>
  );
};

export default VlationSection;
