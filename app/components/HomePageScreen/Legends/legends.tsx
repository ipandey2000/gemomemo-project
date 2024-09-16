import React from "react";

const Legends = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* Container for the whole content */}
      <div className="max-w-screen-xl w-full flex justify-between items-center px-8">
        {/* Left Side: Placeholder Box */}
        <div className="w-1/2">
          <div className="border border-gray-700 w-3/4 h-96"></div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="text-white w-1/2">
          {/* Title */}
          <h2 className="text-xl font-semibold text-yellow-500">START YOUR</h2>
          <h1 className="text-6xl font-bold text-yellow-500 mb-6">LEGEND</h1>

          {/* Description */}
          <p className="text-gray-400 mb-4">
            Ac odio sodales mi leo vitae dui nibh turpis aliquet. Porttitor
            aenean egestas cras mauris at. Mi nisl turpis sodales aliquet. Quis
            risus lorem enim magna nisl.
          </p>
          <p className="text-gray-400 mb-8">
            Nibh vitae morbi urna sapien mattis dolor dictum massa id. Eget arcu
            nulla dolor nisi. Facilisis risus lectus odio enim ut tortor
            facilisi neque nibh.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6">
            Play Now
          </button>

          {/* Pricing and Platforms */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-400">Buy now for $40 only</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Available on:</span>
              <div className="flex items-center space-x-2">
                {/* Add the images for platforms (e.g., Windows and iOS icons) */}
                <img src="/windows.png" alt="Windows" className="w-6 h-6" />
                <img src="/ios.png" alt="iOS" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legends;
