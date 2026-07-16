import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500">
              Faizan<span className="text-zinc-900 dark:text-white">Traders</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#how-it-works" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">How It Works</Link>
          <Link href="#brands" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Brands</Link>
          <Link href="#fleet" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Fleet</Link>
          <Link href="#services" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
          <Link href="#reviews" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Reviews</Link>
          <Link href="#faq" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
          <Link href="#contact" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="https://wa.me/818065174039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
          >
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
        
      </div>
    </header>
  );
}
