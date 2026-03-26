"use client";

import { Colours } from "../Colours";

const researchItems = [
  "B.A., Simon Fraser University, International Studies",
  "M.A., University of British Columbia, Sociology",
  "Ph.D., University of Toronto, Sociology",
];

const Research = () => {
  return (
    <section
      id="research"
      className="w-full px-6 md:px-24 py-24 flex justify-center"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h2
              className="text-3xl font-semibold tracking-tight"
              style={{ color: Colours.colour2 }}
            >
              Research
            </h2>
            <h2
              className="hidden md:block text-3xl font-semibold tracking-tight"
              style={{ color: Colours.colour2 }}
            >
              Education
            </h2>
          </div>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-0">

          <div
            className="md:col-span-3 md:pr-12 md:border-r py-2"
            style={{ borderColor: Colours.colour1 }}
          >
            <p className="text-base leading-relaxed" style={{ color: Colours.colour2 }}>
              Karissa's Master of Arts research explores the orchestration of cultural, financial,
              and symbolic capital in Vancouver, Canada and London, England through the historic
              work of urban planners and mortgage lenders. She is a research assistant in the
              Integration and Infrastructure Lab at the University of British Columbia. Here, she
              is exploring the application of "superdiversity" in Vancouver.
            </p>
            <br />
            <p className="text-base leading-relaxed" style={{ color: Colours.colour2 }}>
              Her past projects include researching global digital surveillance technologies against
              globally subordinated populations. Israel's surveillance of Palestinians, the USA's
              surveillance of illegalized immigrants, and China's surveillance of Uighur Muslims.
              This work was completed as a research assistant for Dr. Darren Byler.
            </p>
          </div>

          <div className="md:col-span-2 md:pl-10 py-2 flex flex-col gap-5">
            <div className="block md:hidden w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
            <h2
              className="md:hidden text-3xl font-semibold tracking-tight"
              style={{ color: Colours.colour2 }}
            >
              Education
            </h2>
            {researchItems.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-xs font-semibold tabular-nums"
                  style={{
                    backgroundColor: Colours.colour4,
                    color: "#F7F3ED",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-sm leading-relaxed pt-0.5"
                  style={{ color: Colours.colour2 }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;