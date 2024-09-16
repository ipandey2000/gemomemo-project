import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaApple } from "react-icons/fa";

const DaysGoneComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      {/* Game Title */}
      <h1 className="text-5xl font-bold mb-2">Days Gone</h1>

      {/* Release Date */}
      <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md inline-block mb-6">
        <span className="text-sm">RELEASE DATE : 30TH DECEMBER</span>
      </div>

      {/* Game Description */}
      <p className="text-lg leading-relaxed mb-8">
        Players assume the role of Deacon St. John, a former bounty hunter
        struggling to survive in a post-apocalyptic world filled with
        zombie-like creatures called Freaks. Though players are surrounded by
        death and danger on all sides, the world that they get to explore feels
        as though it's truly alive, which can encourage players to take risks
        when they probably shouldn't.
      </p>

      {/* CTA Buttons and Platform Availability */}
      <div className="flex items-center space-x-4 mb-8">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-orange-600">
          Try For Free
        </button>
        <span className="text-gray-400">Available on :</span>
        <div className="flex space-x-2">
          <img src="/ios.png" alt="iOS" className="w-8 h-8" />
          <img src="/windows.png" alt="Windows" className="w-8 h-8" />
        </div>
      </div>

      {/* Purchase Price */}
      <div className="mb-8">
        <span className="text-white text-xl">Buy now for $40 only</span>
      </div>

      {/* Friends Playing Status */}
      <div className="text-green-400 flex items-center space-x-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        <span>40 of your friends are playing</span>
      </div>
    </div>
  );
};

export default DaysGoneComponent;
