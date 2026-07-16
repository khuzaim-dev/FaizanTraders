"use client";

import { motion } from "motion/react";

const destinations = [
  { name: "UAE", code: "ae", y: 15 },
  { name: "UK", code: "gb", y: 28 },
  { name: "Australia", code: "au", y: 41 },
  { name: "Kenya", code: "ke", y: 54 },
  { name: "USA", code: "us", y: 67 },
  { name: "Pakistan", code: "pk", y: 80 },
  { name: "India", code: "in", y: 93 },
];

const japan = { x: 25, y: 54 };
const destX = 75;

export default function GlobalMap() {
  return (
    <section className="w-full py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Delivering Vehicles Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From the ports of Japan directly to your country. We handle all logistics, customs, and freight to ensure a smooth import experience.
          </p>
        </motion.div>

        <div className="mt-16 relative w-full max-w-4xl mx-auto aspect-square sm:aspect-[4/3] md:aspect-[16/9] rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm p-4">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            
            {/* Draw paths connecting Japan to destinations */}
            {destinations.map((c, idx) => {
              // Creating a smooth cubic bezier curve
              const path = `M ${japan.x} ${japan.y} C ${japan.x + 25} ${japan.y}, ${destX - 25} ${c.y}, ${destX} ${c.y}`;

              return (
                <g key={`path-${c.name}`}>
                  {/* Background path line */}
                  <path
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-zinc-300 dark:text-zinc-700"
                  />
                  {/* Animated line drawing over it */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    className="text-blue-500"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                      repeatType: "loop",
                      repeatDelay: 2,
                    }}
                  />
                  
                  {/* Animated Car SVG moving along the path */}
                  <motion.g
                    initial={{ offsetDistance: "0%", opacity: 0, scale: 0 }}
                    animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                      repeatDelay: 2,
                    }}
                    style={{
                      offsetPath: `path("${path}")`,
                      offsetRotate: "auto 90deg", // Keep the car facing forward along the path
                    }}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    {/* A simple car icon, centered on the path */}
                    <svg x="-1.5" y="-1.5" width="3" height="3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 7h11l1.5 4.5h-14L6.5 7zM7 16c-.83 0-1.5-.67-1.5-1.5S6.17 13 7 13s1.5.67 1.5 1.5S7.83 16 7 16zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </motion.g>
                </g>
              );
            })}

            {/* Japan Node (Hub) */}
            <g className="relative group">
              {/* Pulse effect */}
              <circle cx={japan.x} cy={japan.y} r="8" className="fill-red-600/10 dark:fill-red-500/10 animate-ping" style={{ transformOrigin: `${japan.x}px ${japan.y}px` }} />
              {/* Outer Ring */}
              <circle cx={japan.x} cy={japan.y} r="5" className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="0.5" />
              {/* Japan Flag from Iconify */}
              <image href="https://api.iconify.design/circle-flags/jp.svg" x={japan.x - 3.5} y={japan.y - 3.5} width="7" height="7" />
              {/* Label */}
              <text x={japan.x} y={japan.y + 8} fontSize="2.5" textAnchor="middle" className="fill-zinc-900 dark:fill-white font-bold">Japan</text>
            </g>
            
            {/* Destination Nodes */}
            {destinations.map((c) => (
              <g key={`node-${c.name}`} className="group">
                {/* Outer Ring */}
                <circle cx={destX} cy={c.y} r="3.5" className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-700 hover:stroke-blue-500 transition-colors" strokeWidth="0.4" />
                {/* Country Flag from Iconify */}
                <image href={`https://api.iconify.design/circle-flags/${c.code}.svg`} x={destX - 2.5} y={c.y - 2.5} width="5" height="5" />
                {/* Label */}
                <text x={destX + 6} y={c.y + 0.8} fontSize="2.5" textAnchor="start" className="fill-zinc-600 dark:fill-zinc-400 font-medium group-hover:fill-zinc-900 dark:group-hover:fill-white transition-colors">{c.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
