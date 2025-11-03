import React from "react";

// Props:
// data: {
//   title: string,
//   columns: array of strings,
//   rows: [{ feature: string, values: array }]
// }
const PricingTable = ({
  data = null,
  containerClass = "bg-white px-4 sm:px-6 md:px-10 py-6",
}) => {
  if (!data) return <p className="text-center py-10">No pricing data available</p>;

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000000]">
          {data.title || "Pricing Table"}
        </h2>
      </div>

      {/* Responsive Scrollable Table */}
      <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full min-w-[800px] border-collapse border border-gray-300 text-sm md:text-base">
          {/* Table Header */}
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 p-4 text-left font-semibold text-gray-700 bg-gray-50">
                {data.featureColumn || "Features"}
              </th>
              {data.columns?.map((col, i) => (
                <th
                  key={i}
                  className="border border-gray-300 p-4 font-semibold text-gray-700 bg-gray-50 text-center"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.rows?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 1 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 p-4 font-semibold text-gray-900">
                  {row.feature}
                </td>
                {row.values.map((val, i) => (
                  <td
                    key={i}
                    className="border border-gray-300 p-4 text-center text-gray-800"
                  >
                    {Array.isArray(val) ? (
                      <div className="flex flex-col items-start space-y-1">
                        {val.map((item, j) => (
                          <div key={j} className="flex items-center">
                            <span className="text-green-600 mr-2">✔</span>
                            {item.replace(/^✔\s/, "")}
                          </div>
                        ))}
                      </div>
                    ) : row.feature.toLowerCase().includes("cta") ? (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
                        {val}
                      </button>
                    ) : (
                      val
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scroll Hint for Mobile */}
      <p className="text-center text-gray-500 text-sm mt-4 block md:hidden">
        Swipe left or right to view the full table
      </p>
    </div>
  );
};

export default PricingTable;
