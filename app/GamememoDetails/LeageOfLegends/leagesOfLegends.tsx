import Image from "next/image";
import Logo from "../../public/Frame 398.png";

export default function LeagendOfLegendes() {
  return (
    <div className="min-h-screen  text-white p-10">
      {/* Main container */}
      <div className="max-w-5xl mx-auto bg-black/80 p-8 rounded-lg shadow-lg">
        {/* Card for the game UI */}
        <div className="relative border ">
          {/* Release Date */}
          <div
            className="absolute top-3 left-3 text-sm text-brown-300 border py-2 p-2"
            style={{ borderRadius: "20px", border: "1px solid gray" }}
          >
            RELEASE DATE: 30TH DECEMBER
          </div>

          {/* Title */}
          <div className="text-5xl font-bold text-center text-brown-500 mt-16">
            LEAGUE OF <br />
            LEGENDS
          </div>

          {/* Button */}
          <div className="flex justify-center mt-5">
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Try For Free
            </button>
          </div>

          {/* Player Info */}
          <div className="text-center mt-2 text-sm text-gray-400">
            245k players already enrolled
          </div>

          {/* Platform Availability */}
          <div className="flex justify-center items-center mt-5">
            <span className="text-gray-300 text-sm">Available on:</span>
            <Image src={Logo} alt="iOS" className="h-6 ml-2" />
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-10 text-center">
          <p className="text-xl leading-relaxed">
            Wild Rift! Built from the ground up for mobile-first PvP, Wild Rift
            is a 5v5 multiplayer online battle arena (MOBA) game with exciting
            action where your skills, strategy, and combat senses are put to the
            test. Wild Rift is packed with content and fresh features for the
            ultimate PvP multiplayer experience.
          </p>
          <p className="mt-4 text-lg">
            Enjoy fast-paced MOBA combat, real-time strategy, smooth controls,
            and diverse 5v5 gameplay. Team up with friends, lock in your
            champion, and play to win!
          </p>
        </div>

        {/* Champion Section */}
        <div className="mt-10 text-center">
          <h2 className="text-4xl font-bold text-brown-500">
            CHOOSE YOUR <br /> CHAMPION
          </h2>
          <p className="mt-4 text-lg">
            Whether you like to dive straight into the fray, support your
            teammates, or something in between, there a spot for you on the
            Rift.
          </p>
        </div>
      </div>
    </div>
  );
}
