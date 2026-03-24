"use client";

import { Colours } from "../Colours";

const researchItems = [
  "test 1",
  "test 2",
  "test 3",
  "test 4",
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
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: Colours.colour2 }}>
            Research
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-0">

          {/* Left: body text */}
          <div className="md:col-span-3 md:pr-16 py-2">
            <p className="text-base leading-relaxed" style={{ color: Colours.colour2 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>

          {/* Divider — vertical on md+, horizontal on mobile */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-full" style={{ backgroundColor: Colours.colour1 }} />
          </div>
          <div className="block md:hidden w-full h-px" style={{ backgroundColor: Colours.colour1 }} />

          {/* Right: numbered list — on mobile sits just right of divider */}
          <div className="md:col-span-1 md:pl-4 py-2 flex flex-col gap-6">
            {researchItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-2xl font-light leading-none mt-0.5 tabular-nums"
                  style={{ color: Colours.colour4 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: Colours.colour2 }}>
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