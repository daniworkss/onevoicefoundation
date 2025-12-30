import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(15,23,42,0.06)]">
      <div className=" w-full bg-gradient-to-r from-[var(--ov-secondary-green)] via-black to-[var(--ov-secondary-green)]" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image
              src="https://res.cloudinary.com/dccph2plo/image/upload/v1767098805/New_Project_bb1cga.png"
              width={120}
              height={40}
              priority
              alt="One Voice Foundation logo"
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-dm-sans md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? router.pathname === item.href
                : router.pathname.startsWith(item.href);

            if (item.label === "Donate") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-[#f97316] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors"
                >
                 <p className="text-white"> {item.label}</p>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "border-b-2 border-transparent pb-1 text-neutral-700 hover:text-black transition-colors",
                  isActive && "border-[var(--ov-secondary-green)] text-black"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/donate"
            className="rounded-xl bg-[#f97316] px-3 py-1.5  transition-colors font-dm-sans"
            onClick={() => setMobileOpen(false)}
          >
           <p className=" text-xs font-semibold text-white "> Donate</p>
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ov-border)] bg-white text-neutral-700 hover:bg-neutral-50"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

         
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--ov-border)] bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-dm-sans">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-neutral-700 hover:bg-[var(--ov-secondary-green-soft)] hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
