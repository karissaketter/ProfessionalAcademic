"use client";

import Image from "next/image";
import { Colours } from "../Colours";

const Awards = () => {
  return (
    <section
      id="awards"
      className="relative w-full px-6 md:px-24 py-32"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="relative max-w-7xl mx-auto h-[180vh]">

        {/* Sticky image */}
        <div className="sticky top-16 h-[90vh] rounded-md overflow-hidden">
          <Image
            src="/vanImage.jpg"
            alt="Awards background"
            fill
            className="object-cover"
          />
        </div>

        {/* Scrolling text */}
        <div className="relative z-10 max-w-md space-y-12 p-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <h3
                className="text-xl font-semibold mb-2 text-white"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}
              >
                Lorem Ipsum
              </h3>
              <p
                className="text-white/90"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
              >
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;