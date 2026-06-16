import React, { useState } from "react";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const fruits = [
  {
    name: "Pomegranate",
    emoji: "🍎",
    season: [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
  },
  {
    name: "Mango",
    emoji: "🥭",
    season: [0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0],
  },
  {
    name: "Banana",
    emoji: "🍌",
    season: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],       
  },
  {
    name: "Guava",
    emoji: "🍈",
    season: [1, 1, 2, 2, 0, 0, 2, 2, 1, 1, 1, 1],
  },
  {
    name: "Grapes",
    emoji: "🍇",
    season: [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2],
  },
];

const vegetables = [
  {
    name: "Tomato",
    emoji: "🍅",
    season: [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
  },
  {
    name: "Onion",
    emoji: "🧅",
    season: [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1],
  },
  {
    name: "Chilli",
    emoji: "🌶️",
    season: [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
  },
  {
    name: "Mix Vegetable",
    emoji: "🥦",
    season: [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
  },
];

export function CalendarSection() {
  const [activeTab, setActiveTab] = useState("fruits");

  const currentData =
    activeTab === "fruits" ? fruits : vegetables;

  return (
    <section className="bg-[#d8dba5] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[#2d4a2d] uppercase tracking-[4px] font-semibold">
            Harvest Calendar
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#6b3b3b] mt-4">
            Season's Calendar
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-10 mb-10">
          <button
            onClick={() => setActiveTab("fruits")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "fruits"
                ? "bg-[#2d4a2d] text-white"
                : "bg-white text-[#2d4a2d]"
            }`}
          >
            🍎 Fruits
          </button>

          <button
            onClick={() => setActiveTab("vegetables")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "vegetables"
                ? "bg-[#2d4a2d] text-white"
                : "bg-white text-[#2d4a2d]"
            }`}
          >
            🥕 Vegetables
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl shadow-lg">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr>
                <th className="bg-[#2d4a2d] text-white p-5 text-left">
                  PRODUCT
                </th>

                {months.map((month) => (
                  <th
                    key={month}
                    className="bg-[#2d4a2d] text-white text-center p-4"
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentData.map((item) => (
                <tr key={item.name}>
                  {/* Product Column */}
                  <td className="bg-[#2d4a2d] text-white p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 border-2 border-white/20 text-4xl shadow-sm">
                        {item.emoji}
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-white/60 text-sm">
                          Seasonal Produce
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Months */}
                  {item.season.map((status, index) => (
                    <td
                      key={index}
                      className={`h-24 border border-white/20 ${
                        status === 1
                          ? "bg-[#7f9a69]"
                          : status === 2
                          ? "bg-[#d96f36]"
                          : "bg-white"
                      }`}
                    >
                      {status !== 0 && (
                        <div className="flex justify-center items-center h-full text-3xl opacity-90 drop-shadow-sm">
                          {item.emoji}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#7f9a69] rounded shadow-sm"></div>
            <span className="font-semibold text-[#2d4a2d]">Main Season</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#d96f36] rounded shadow-sm"></div>
            <span className="font-semibold text-[#2d4a2d]">Sub Season</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white border border-gray-300 rounded shadow-sm"></div>
            <span className="font-semibold text-[#2d4a2d]">Off Season</span>
          </div>
        </div>

      </div>
    </section>
  );
}
