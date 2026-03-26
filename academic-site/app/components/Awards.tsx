"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Colours } from "../Colours";

const awards = [
  { title: "Sociology Admission Merit Award", provider: "University of Toronto, 2026" },
  { title: "Doctoral Recruitment Award", provider: "University of Toronto, 2026" },
  { title: "Kurt and Anne Paulus Memorial Scholarship", provider: "University of British Columbia, 2025" },
  { title: "Sociology Graduate Scholarship", provider: "University of British Columbia, 2025" },
  { title: "Patricia Marchak International Research Scholarship in Sociology", provider: "University of British Columbia, 2025" },
  { title: "Canada Graduate Research Scholarship – Master's", provider: "SSHRC, 2025" },
  { title: "The British Columbia Graduate Scholarship", provider: "University of British Columbia, 2024" },
  { title: "Undergraduate Scholars Entrance Scholarship with Distinction", provider: "Simon Fraser University, 2020–2024" },
];

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const credits = creditsRef.current;
    if (!section || !credits) return;

    const onScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const stickyH = viewportH * 0.85;
      const scrollableDistance = section.offsetHeight - stickyH;
      const scrolledIn = Math.max(0, -sectionRect.top);
      const progress = Math.min(scrolledIn / scrollableDistance, 1);
      const contentH = credits.scrollHeight;
      const totalTravel = stickyH + contentH;
      const translateY = stickyH - progress * totalTravel;

      credits.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="awards"
      className="w-full"
      style={{ backgroundColor: Colours.background }}
    >

      <div className="md:hidden px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="relative w-full h-[250px] rounded-md overflow-hidden">
            <Image src="/vanImage.jpg" alt="Awards" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            {awards.map((award, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold" style={{ color: Colours.colour2 }}>
                  {award.title}
                </h3>
                <p className="text-sm opacity-70" style={{ color: Colours.colour2 }}>
                  {award.provider}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div
        ref={sectionRef}
        className="hidden md:block"
        style={{ height: "350vh" }} 
      >
        <div className="sticky top-0 w-full h-screen flex items-center justify-center px-6 md:px-24">

          <div className="relative w-full max-w-7xl h-[85vh] rounded-xl overflow-hidden">
            <Image
              src="/vanImage.jpg"
              alt="Awards"
              fill
              className="object-cover"
            />

            <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/70 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/70 to-transparent z-20 pointer-events-none" />

            <div
              ref={creditsRef}
              className="absolute left-0 z-10 flex flex-col items-start gap-10 px-12 will-change-transform"
              style={{ top: 0, maxWidth: "50%" }}
            >
              {awards.map((award, i) => (
                <div key={i} className="text-left">
                  <h3
                    className="text-2xl font-semibold mb-1 text-white"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                  >
                    {award.title}
                  </h3>
                  <p
                    className="text-white text-sm tracking-wide"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,1)" }}
                  >
                    {award.provider}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Awards;