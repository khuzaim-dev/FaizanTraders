import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import GlobalMap from "@/components/global-map";
import { CustomerReviews } from "@/components/customer-reviews";
import { Contact } from "@/components/contact-form";
import {
  HowItWorks,
  Brands,
  Fleet,
  Services,
  WhyUs,
  RouteHighlight,
  FAQ,
  Footer
} from "@/components/placeholders";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <GlobalMap />
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
