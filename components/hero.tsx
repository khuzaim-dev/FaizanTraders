"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Anchor, MapPin } from "lucide-react";
import { cars } from "../data/cars";

export default function Hero() {
  const featuredCars = cars.filter((car) => car.featured);
  // Duplicate array for seamless looping
  const scrollerItems = [...featuredCars, ...featuredCars, ...featuredCars];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 pt-16 pb-16 dark:bg-zinc-950">
      
      {/* Top Part: Content & Trust Row */}
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 mb-16 relative">
        
        {/* Floating Flags (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-4 top-12 hidden lg:block"
        >
          <img 
            src="https://www.flagsonline.it/uploads/2016-6-6/1200-0/japan.jpg" 
            alt="Japan Flag" 
            className="h-20 w-32 object-cover rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 rotate-[-6deg]" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-4 top-12 hidden lg:block"
        >
          <img 
            src="https://img.magnific.com/free-photo/flag-pakistan_1401-192.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Pakistan Flag" 
            className="h-20 w-32 object-cover rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 rotate-[6deg]" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            Import Your Dream Car — <br className="hidden sm:block" />
            <span className="text-red-600 dark:text-red-500">Direct from Japan </span>
            to <span className="text-emerald-600 dark:text-emerald-500">Pakistan</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            We source top-quality JDM vehicles, rigorously verify all auction sheets, and handle direct sea freight from Japan to Port Qasim, Karachi.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#fleet"
              className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50"
            >
              Browse Fleet
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 py-3 text-base font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              Get a Free Quote
            </Link>
          </div>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 border-t pt-8 dark:border-zinc-800"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">100% Document Verified</h3>
            <p className="mt-1 text-sm text-zinc-500">Authentic auction sheets</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-500">
              <Anchor className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Japan → Karachi Sea Freight</h3>
            <p className="mt-1 text-sm text-zinc-500">Secure & timely shipping</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-500">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Trusted in Pakistan</h3>
            <p className="mt-1 text-sm text-zinc-500">500+ Cars successfully delivered</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Part: Infinite Scroller */}
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80, // Slower speed
          }}
        >
          {scrollerItems.map((car, idx) => (
            <div
              key={`${car.id}-${idx}`}
              className="relative h-48 w-64 shrink-0 overflow-hidden rounded-xl border bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <img 
                src={car.images[0]}
                alt={`${car.make} ${car.model}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
                <p className="text-sm font-semibold text-white">{car.make} {car.model}</p>
                <p className="text-xs text-zinc-300">Available for Import</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
