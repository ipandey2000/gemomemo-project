export default function ReviewSection ()
{
  return (
    <div className="  text-white p-10">
      <div className="max-w-6xl mx-auto">

        {/* Title for the reviews section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Reviews from other top players</h2>
          <a href="#" className="text-sm text-gray-400 hover:underline flex items-center">
            VIEW ALL <span className="ml-1">→</span>
          </a>
        </div>

        {/* Reviews Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Review Card */}
          {Array.from( { length: 4 } ).map( ( _, index ) => (
            <div
              key={index}
              className="bg-yellow-900/30 border border-yellow-500/20 rounded-lg p-6"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-600 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-lg">Gamer1568</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm mr-1">★★★★☆</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-300 leading-relaxed">
                Suspendisse tristique cursus viverra eu ac ac arcu integer. Et
                dolor aliquam nisi lacinia commodo facilisis tortor lobortis
                malesuada. Id nibh nisl convallis odio dui.
              </p>
            </div>
          ) )}

        </div>
      </div>
    </div>
  );
}
