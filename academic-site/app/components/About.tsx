"use client";

import Image from "next/image";
import { Colours } from "../Colours";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-24 py-24 flex justify-center"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: Colours.colour2 }}>
            About
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        {/* Mobile: image floated right so it doesn't overlap the left border */}
        <div className="block md:hidden">
          <div className="float-right ml-4 mb-4 w-[160px] h-[200px] rounded-md overflow-hidden relative flex-shrink-0">
            <Image
              src="/headShot.jpg"
              alt="Headshot"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="text-sm leading-relaxed"
            style={{
              borderLeft: `4px solid ${Colours.colour4}`,
              paddingLeft: '1rem',
              color: Colours.colour2,
            }}
          >
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. lilwətaɬ (Tsleil-Waututh), and shíshálh (Sechelt) First Nations.
            </p>
          </div>
          <div className="clear-both" />
        </div>

        {/* md+: 1/3 image, 2/3 text */}
        <div className="hidden md:grid md:grid-cols-3 gap-16 items-start">
          <div className="relative w-full h-[520px] lg:h-[640px] rounded-md overflow-hidden">
            <Image
              src="/headShot.jpg"
              alt="Headshot"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div
            className="col-span-2 flex flex-col gap-7 leading-relaxed p-8"
            style={{ borderLeft: `4px solid ${Colours.colour4}` }}
          >
            <p className="text-sm leading-relaxed" style={{ color: Colours.colour2 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: Colours.colour2 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. lilwətaɬ (Tsleil-Waututh), and shíshálh (Sechelt) First Nations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;