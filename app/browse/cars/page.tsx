import Link from "next/link";
import { cars } from "../../../data/cars";
import Navbar from "../../../components/navbar";
import { Footer } from "../../../components/placeholders";
import { Phone } from "lucide-react";

export const metadata = {
  title: "Browse Inventory | Faizan Traders",
  description: "Browse our complete inventory of premium JDM vehicles ready for export to Pakistan.",
};

export default function BrowseCarsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-emerald-600 mb-4 inline-block">&larr; Back to Home</Link>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Complete Inventory</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Browse our full catalog of high-quality Japanese vehicles. All cars have been thoroughly inspected and are ready for sea freight to Karachi, Pakistan.
            </p>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map(car => (
              <div key={car.id} className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    Grade: {car.auctionGrade}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{car.make} {car.model}</h3>
                    <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">{car.year}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                    <div><span className="font-medium text-zinc-900 dark:text-zinc-300">Mileage:</span> {car.mileageKm.toLocaleString()} km</div>
                    <div><span className="font-medium text-zinc-900 dark:text-zinc-300">Fuel:</span> {car.fuelType}</div>
                    <div><span className="font-medium text-zinc-900 dark:text-zinc-300">Type:</span> {car.bodyType}</div>
                    <div><span className="font-medium text-zinc-900 dark:text-zinc-300">Trans:</span> {car.transmission}</div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a 
                      href={`https://wa.me/818065174039?text=Hi, I'm interested in importing the ${car.year} ${car.make} ${car.model} (Grade: ${car.auctionGrade}). Please provide more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Contact About This Car
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Looking for a specific car?</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">If you need a specific model, make, or custom specifications that aren't listed in our current inventory, simply send us a message and we will source it directly from the Japanese auctions for you.</p>
            </div>
            <a 
              href="https://wa.me/818065174039?text=Hi, I am looking for a specific car model that is not listed in your inventory. Can you help me source it?"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors w-full md:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              Message Request
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
