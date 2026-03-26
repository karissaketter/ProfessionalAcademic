"use client";

import Link from "next/link";
import { Colours } from "../Colours";

const publications = [
  {
    title: "Ketter, K., & Byler, D. (2025)",
    description: "Subordinated Inclusion: Population Sorting Technologies as Digital Confinement in the United States, China, and Israel. Surveillance & Society, 23(4), 398–413. ",
    href: "https://doi.org/10.24908/ss.v23i4.18233",
  },
  {
    title: "Byler, D., & Ketter, K. (2024, January 25)",
    description: "On the Travel of State Crimes by Algorithm: Chinese Camera Systems in Israel. Made in China Journal",
    href: "https://madeinchinajournal.com/2024/01/25/on-the-travel-of-state-crimes-by-algorithm-chinese-camera-systems-in-israel/",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="w-full px-6 md:px-24 py-24 flex justify-center"
      style={{ backgroundColor: Colours.background }}
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: Colours.colour2 }}>
            Publications
          </h2>
          <div className="w-full h-px" style={{ backgroundColor: Colours.colour1 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {publications.map((pub) => (
            <Link key={pub.title} href={pub.href} className="group flex flex-col">
              <div
                className="flex-1 p-8 rounded-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md flex flex-col gap-4"
                style={{
                  backgroundColor: Colours.colour4,
                  borderLeft: `4px solid ${Colours.colour2}`,
                }}
              >
                <h3 className="text-xl font-semibold" style={{ color: "#F7F3ED" }}>
                  {pub.title}
                </h3>
                <p style={{ color: "#E8DDD0" }}>{pub.description}</p>

                <div
                  className="flex items-center gap-2 mt-auto text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: Colours.colour2 }}
                >
                  <span>View publication</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;