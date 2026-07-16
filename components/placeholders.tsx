import Link from "next/link";
import { cars } from "../data/cars";
import { 
  CheckCircle2, FileText, Anchor, Truck, ShieldCheck, MapPin, 
  Phone, Star, Quote, ChevronDown, Mail, User, MessageSquare 
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    { title: "Sourcing in Japan", desc: "We locate high-quality vehicles in auctions or direct sellers across Japan.", icon: <MapPin className="h-6 w-6" /> },
    { title: "Document Verification", desc: "Rigorous check of auction sheets and export certificates to ensure authenticity.", icon: <ShieldCheck className="h-6 w-6" /> },
    { title: "Purchase & Loading", desc: "Vehicle is secured and loaded onto a RoRo vessel for sea freight.", icon: <Anchor className="h-6 w-6" /> },
    { title: "Arrival in Karachi", desc: "Vessel arrives at Port Qasim, Karachi. We manage local clearance.", icon: <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-500" /> },
    { title: "Customs Clearance", desc: "We facilitate transparent duty payments and necessary paperwork.", icon: <FileText className="h-6 w-6" /> },
    { title: "Safe Delivery", desc: "Your dream car is delivered directly to you anywhere in Pakistan.", icon: <Truck className="h-6 w-6" /> },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Your seamless journey from Japan to Pakistan.</p>
        </div>
        
        <div className="mt-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-200 to-emerald-200 dark:from-red-900 dark:to-emerald-900 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center z-10 hover:shadow-md transition-shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-black border-2 border-red-100 dark:border-zinc-800 text-red-600 dark:text-red-500 mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">{step.title}</h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  const brands = [
    { name: 'Toyota', url: 'https://satjapan.com/makes/toyota.png' },
    { name: 'Honda', url: 'https://satjapan.com/makes/honda.png' },
    { name: 'Nissan', url: 'https://satjapan.com/makes/nissan.png' },
    { name: 'Mazda', url: 'https://satjapan.com/makes/mazda.png' },
    { name: 'Suzuki', url: 'https://satjapan.com/makes/suzuki.png' },
    { name: 'Mitsubishi', url: 'https://satjapan.com/makes/mitsubishi.png' },
    { name: 'Daihatsu', url: 'https://satjapan.com/makes/daihatsu.png' },
    { name: 'Subaru', url: 'https://satjapan.com/makes/subaru.png' },
    { name: 'Lexus', url: 'https://satjapan.com/makes/lexus.png' },
    { name: 'Mercedes Benz', url: 'https://satjapan.com/makes/mercedes-benz.png' },
    { name: 'Hino', url: 'https://satjapan.com/makes/hino.png' },
    { name: 'Isuzu', url: 'https://satjapan.com/makes/isuzu.png' },
    { name: 'BMW', url: 'https://satjapan.com/makes/bmw.png' },
    { name: 'Audi', url: 'https://satjapan.com/makes/audi.png' }
  ];

  return (
    <section id="brands" className="py-16 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">Popular Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {brands.map(brand => (
            <Link href={`/browse/cars?make=${brand.name}`} key={brand.name} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 hover:shadow-md dark:hover:border-emerald-500 transition-all group">
              <div className="h-12 w-12 flex items-center justify-center mb-3">
                <img 
                  src={brand.url} 
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <span className="font-semibold text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 transition-colors">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Fleet() {
  // Take first 16 cars for the grid preview
  const displayCars = cars.slice(0, 16);
  
  return (
    <section id="fleet" className="py-16 md:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Featured Fleet</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Browse a selection of vehicles ready for export to Pakistan.</p>
          </div>
          <Link href="/browse/cars" className="hidden sm:inline-flex text-emerald-600 dark:text-emerald-500 font-medium hover:underline">
            View All Cars &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCars.map(car => (
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
        <div className="mt-8 text-center sm:hidden">
          <Link href="/browse/cars" className="text-emerald-600 dark:text-emerald-500 font-medium hover:underline">
            View All Cars &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { title: "Auction Sheet Verification", desc: "We translate and verify auction sheets to guarantee the true condition and grade of the vehicle." },
    { title: "Secure Transactions", desc: "Transparent financial processes ensuring your funds are safe throughout the import process." },
    { title: "Customs Clearance Support", desc: "Expert guidance on Pakistan's import duties, taxes, and port clearance procedures." },
    { title: "Shipment Tracking", desc: "Real-time updates on your vehicle's sea freight journey from Japan to Karachi." }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Our Services</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">End-to-end support for importing your car.</p>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
             <div key={i} className="flex flex-col items-center p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
               <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 dark:bg-emerald-900/30 dark:text-emerald-400">
                 <CheckCircle2 className="h-6 w-6" />
               </div>
               <h3 className="font-semibold text-zinc-900 dark:text-white">{svc.title}</h3>
               <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{svc.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const reasons = [
    { title: "Direct from Japan", desc: "No middlemen. We buy directly from Japanese auctions and dealers to get you the best price." },
    { title: "Transparent Pricing", desc: "We break down all costs including freight and estimated customs duties in Pakistan so there are no surprises." },
    { title: "Condition Guarantee", desc: "What you see is what you get. Our pre-purchase inspections ensure the car matches the auction sheet perfectly." }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white text-center">Why Choose Us</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{r.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function RouteHighlight() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-zinc-900 dark:bg-zinc-900 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex flex-col items-center">
            <span className="text-4xl">🇯🇵</span>
            <span className="text-white font-bold mt-2">Yokohama / Kobe</span>
            <span className="text-zinc-400 text-sm">Japan</span>
          </div>
          <div className="flex-1 flex items-center justify-center w-full px-4">
            <div className="h-px bg-zinc-700 flex-1"></div>
            <div className="px-4 text-emerald-500 flex flex-col items-center">
              <Anchor className="w-6 h-6 mb-1" />
              <span className="text-xs uppercase tracking-widest font-semibold">Sea Freight</span>
            </div>
            <div className="h-px bg-zinc-700 flex-1"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">🇵🇰</span>
            <span className="text-white font-bold mt-2">Port Qasim / KHI</span>
            <span className="text-zinc-400 text-sm">Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "What is an auction sheet and why is it important?", a: "An auction sheet is a document created by independent Japanese inspectors detailing a car's exact condition, mileage, and repair history. We verify this sheet to ensure you get exactly what you pay for." },
    { q: "How long does shipping from Japan to Karachi take?", a: "Sea freight from Japan to Port Qasim, Karachi typically takes between 15 to 25 days depending on the shipping line and weather conditions." },
    { q: "Who handles the customs clearance in Pakistan?", a: "We have trusted clearing agents in Karachi who handle all the paperwork and ensure the correct duty is paid according to Pakistani customs regulations." },
    { q: "Can I import a car older than 3 years?", a: "Under Pakistan's current import policy, you can only import cars up to 3 years old, and SUVs/Jeeps up to 5 years old. We ensure all cars sourced comply with these regulations." }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white text-center">Frequently Asked Questions</h2>
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
             <details key={i} className="group bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 open:shadow-md transition-all">
               <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-zinc-900 dark:text-white marker:content-none">
                 {faq.q}
                 <ChevronDown className="h-5 w-5 text-zinc-500 transition-transform group-open:rotate-180" />
               </summary>
               <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                 <p>{faq.a}</p>
               </div>
             </details>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-zinc-400 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
              <span className="text-red-500">Faizan</span><span className="text-emerald-500">Traders</span>
            </h3>
            <p className="text-sm">Importing your dream car direct from Japan to Pakistan.</p>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Japan HQ</h4>
            <p className="text-sm">Office No. 306, Urban Heights, 3rd Floor</p>
            <p className="text-sm">2 Chome-11-4, Johoku, Oyama, Tochigi 323-0029</p>
            <p className="text-sm mt-2 font-semibold text-white">Phone: +81 80 6517 4039</p>
            <p className="text-sm mt-1">Email: faizantraders1000@gmail.com</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Fleet</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-900 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Faizan Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
