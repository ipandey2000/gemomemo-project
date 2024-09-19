// pages/index.js
export default function NameScreen ()
{
    return (
        <div className="relative min-h-screen bg-black">
      
            <div className="p-4 sm:p-8 lg:p-16">

       
                <div className="absolute top-10 left-4 sm:left-10 md:left-20 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold">Akali</h2>
                    <p className="text-lg sm:text-xl mb-4">The Rogue Assassin</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                        Play Now
                    </button>
                </div>

  
                <div className="absolute top-60 right-4 sm:right-10 md:right-20 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold">Thresh</h2>
                    <p className="text-lg sm:text-xl mb-4">The Chain Warden</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                        Play Now
                    </button>
                </div>

            
                <div className="absolute bottom-60 left-4 sm:left-10 md:left-20 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold">Jinx</h2>
                    <p className="text-lg sm:text-xl mb-4">The Loose Cannon</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                        Play Now
                    </button>
                </div>

          
                <div className="absolute bottom-10 right-4 sm:right-10 md:right-20 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold">Yasuo</h2>
                    <p className="text-lg sm:text-xl mb-4">The Unforgiven</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                        Play Now
                    </button>
                </div>

            </div>
        </div>
    );
}
