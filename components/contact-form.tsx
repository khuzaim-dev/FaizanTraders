"use client";

import { useState } from "react";
import { User, Phone, MessageSquare, MapPin, Mail, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify requires this hidden field to route the submission
    formData.append("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col lg:flex-row">
          
          <div className="p-10 lg:w-1/2 bg-emerald-900 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
            <p className="text-emerald-100 mb-8">Looking for a specific make and model? Send us your requirements and we will find the perfect match in the Japanese auctions.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Japan Office</p>
                  <p className="text-emerald-100 text-sm">Office No. 306, Urban Heights, 3rd Floor<br/>2 Chome-11-4, Johoku, Oyama, Tochigi 323-0029</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">WhatsApp / Call</p>
                  <p className="text-emerald-100 text-sm">+81 80 6517 4039</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-emerald-100 text-sm">faizantraders1000@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:w-1/2 bg-white dark:bg-zinc-900 flex flex-col justify-center">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Request Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">Thank you for your inquiry. Our team will review your requirements and get back to you shortly via WhatsApp or Email.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form name="contact" onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm font-medium">
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <input id="name" name="name" type="text" required disabled={status === "submitting"} className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none disabled:opacity-50" placeholder="Ali Khan" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Phone Number / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <input id="phone" name="phone" type="text" required disabled={status === "submitting"} className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none disabled:opacity-50" placeholder="+92 300 1234567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Car Requirements</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                    <textarea id="requirements" name="requirements" required disabled={status === "submitting"} rows={4} className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none disabled:opacity-50" placeholder="I am looking for a 2021 Toyota Aqua..."></textarea>
                  </div>
                </div>
                <button type="submit" disabled={status === "submitting"} className="w-full py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors disabled:opacity-70 flex justify-center items-center">
                  {status === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
