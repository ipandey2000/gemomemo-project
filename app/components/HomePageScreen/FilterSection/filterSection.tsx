import { useState } from "react";

// Define types for the price range
interface PriceRange {
  min: number;
  max: number;
}

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 40,
    max: 55,
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="w-64 p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl mb-4">Categories</h2>
      <div className="space-y-2">
        {[
          "Indy",
          "Adventure",
          "MMO",
          "Action",
          "Strategy",
          "Simulator",
          "Sports",
        ].map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-yellow-500"
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>

      <h2 className="text-xl mt-6 mb-4">Platforms</h2>
      <div className="space-y-2">
        {[
          "PC",
          "PlayStation 5",
          "PlayStation 4",
          "Xbox Series",
          "Nintendo Switch",
        ].map((platform) => (
          <label key={platform} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-yellow-500"
            />
            <span className="ml-2">{platform}</span>
          </label>
        ))}
      </div>

      <h2 className="text-xl mt-6 mb-4">Type</h2>
      <div className="space-y-2">
        {["Paid", "Free"].map((type) => (
          <label key={type} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-yellow-500"
            />
            <span className="ml-2">{type}</span>
          </label>
        ))}
      </div>

      <h2 className="text-xl mt-6 mb-4">Price</h2>
      <div className="flex justify-between items-center">
        <input
          type="number"
          name="min"
          value={priceRange.min}
          onChange={handlePriceChange}
          className="w-16 p-1 bg-gray-700 rounded text-white"
        />
        <span>-</span>
        <input
          type="number"
          name="max"
          value={priceRange.max}
          onChange={handlePriceChange}
          className="w-16 p-1 bg-gray-700 rounded text-white"
        />
      </div>

      <h2 className="text-xl mt-6 mb-4">Ratings</h2>
      <div className="space-y-2">
        {[5, 4, 3, 2].map((rating) => (
          <label key={rating} className="flex items-center">
            <input
              type="radio"
              name="rating"
              className="form-radio h-4 w-4 text-yellow-500"
            />
            <span className="ml-2">{"★".repeat(rating)} & Up</span>
          </label>
        ))}
      </div>

      <button className="mt-6 w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
