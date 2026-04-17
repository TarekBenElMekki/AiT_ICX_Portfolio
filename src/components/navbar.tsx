"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SmartImage } from "@/components/smart-image";

const links = [
  { label: "Promotional", href: "#promotional" },
  { label: "History", href: "#history" },
  { label: "Food", href: "#kitchen" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d2a5c]/20 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between md:h-[72px]">
        <a href="https://lookerstudio.google.com/u/0/reporting/4ee85e76-8824-43a3-b9b5-eba97bf36cef/page/p_cl2n6a8ayd" className="flex items-center">
          <SmartImage
            src="/assets/products/Logo_HereTunisia.svg"
            alt="Here Tunisia logo"
            width={180}
            height={56}
            className="h-auto w-[120px] md:w-[150px]"
            seed="here-tunisia-logo"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold tracking-[0.01em] text-white/88 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <a href="https://lookerstudio.google.com/u/0/reporting/4ee85e76-8824-43a3-b9b5-eba97bf36cef/page/p_cl2n6a8ayd" className="rounded-full bg-white px-4 py-2 text-[13px] font-bold text-[#0d2a5c] transition hover:-translate-y-0.5">
            Explore
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 p-2 text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d2a5c]/95 xl:hidden">
          <div className="section-shell flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lookerstudio.google.com/u/0/reporting/4ee85e76-8824-43a3-b9b5-eba97bf36cef/page/p_cl2n6a8ayd"
              className="mt-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0d2a5c]"
              onClick={() => setOpen(false)}
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

