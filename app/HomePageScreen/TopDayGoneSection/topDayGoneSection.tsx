import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/Frame 398.png";
import { BiLogOut } from "react-icons/bi";
const DaysGoneComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="text-white p-10 rounded-lg shadow-lg ">
      <h1 className="text-7xl font-bold mb-4">Days Gone</h1>

      {/* Release Date */}
      <div className="bg-gray-800 text-gray-400 px-2  rounded-md inline-block mb-8">
        <span
          className="text-sm"
          style={{ marginLeft: "30px", lineHeight: "30px" }}
        >
          RELEASE DATE : 30TH DECEMBER
        </span>
      </div>

      <p
        className="text-lg leading-relaxed mb-8 max-w-full sm:max-w-xl"
        style={{ lineHeight: "40px" }}
      >
        Players assume the role of Deacon St. John, a former bounty hunter
        struggling to survive in a post-apocalyptic world filled with
        zombie-like creatures called Freaks. Though players are surrounded by
        death and danger on all sides, the world that they get to explore feels
        as though it's truly alive, which can encourage players to take risks
        when they probably shouldn't.
      </p>

      <div
        className="flex items-center space-x-4 mb-8"
        style={{ lineHeight: "30px" }}
      >
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-orange-700">
          Try For Free
        </button>
        <span className="text-gray-400">Available on :</span>
        <div className="flex space-x-2">
          <Image
            src={Logo}
            alt="iOS"
            className="w-8 h-8"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Purchase Price */}
      <div className="mb-8">
        <span className="text-white ">Buy now for $40 only</span>
      </div>

      {/* Friends Playing Status */}
      <div className=" flex items-center space-x-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        <span>40 of your friends are playing</span>
      </div>
    </div>
  );
};

export default DaysGoneComponent;
