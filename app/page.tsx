import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { CustomerReviews } from "@/components/customer-reviews";
import {
  HowItWorks,
  Brands,
  Fleet,
  Services,
  WhyUs,
  RouteHighlight,
  FAQ,
  Contact,
  Footer
} from "@/components/placeholders";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <HowItWorks />
        <Brands />
        <Fleet />
        <Services />
        <WhyUs />
        <CustomerReviews />
        <RouteHighlight />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
