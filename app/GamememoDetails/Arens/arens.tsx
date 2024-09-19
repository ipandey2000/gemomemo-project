import React from "react";

const Arens = () =>
{
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative bg-black border border-gray-800 p-8 w-full max-w-5xl rounded-lg text-white">

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-gray-600"></div>

     
        <div className="flex items-center justify-between mt-32" style={{ marginBottom: 20 }}>
       
          <div className="flex-shrink-0">
            <p className="font-bold">
              CHOOSE FROM MULTIPLE <br /><span className="text-yellow-500">ARENAS</span>
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="flex flex-col space-y-4">
              <div className="w-20 h-20 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
                <p className="text-center text-gray-400">Arena 1</p>
              </div>
              <div className="w-20 h-20 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
                <p className="text-center text-gray-400">Arena 2</p>
              </div>
              <div className="w-20 h-20 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center">
                <p className="text-center text-gray-400">Arena 3</p>
              </div>
            </div>
          </div>
        </div>

   
        <div className="flex justify-center text-center mt-8">
          <p className="text-gray-400">
            Battle across an icy bridge as your team of random champions charge <br />
            toward the enemy Nexus in this chaotically fun 5v5 game mode.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arens;
