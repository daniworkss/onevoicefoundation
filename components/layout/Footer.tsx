import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="page-footer border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.5fr)_minmax(0,1.6fr)]">
          {/* Brand + mission + CTA */}
          <div className="space-y-4">
            <div className="heading-display text-xs tracking-[0.25em] text-white/80">
              ONE VOICE FOUNDATION INC.
            </div>
            <p className="max-w-md text-sm text-neutral-300 font-dm-sans">
              A diaspora-led non-profit dedicated to uplifting Nigerian youth through health,
              education, and community support for Nigerian youth.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full bg-[var(--ov-secondary-green)] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-black transition-colors font-dm-sans"
            >
              Donate to Support Youth
            </Link>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 font-dm-sans">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2 text-sm font-dm-sans md:grid-cols-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-neutral-200 hover:text-[var(--ov-secondary-green-soft)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / social */}
          <div className="space-y-3 text-sm font-dm-sans">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Contact
            </h3>
            <p className="text-neutral-300 text-sm">
              Email: <span className="font-medium text-white">contact@onevoicefoundationinc.org </span>
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
              <span className="rounded-full border border-neutral-700 px-3 py-1">Facebook</span>
              <span className="rounded-full border border-neutral-700 px-3 py-1">onevoicefoundation.ovf</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-800 pt-4 text-xs text-neutral-400 font-dm-sans md:flex-row md:items-center md:justify-between">
          <p className="text-center">© {year} One Voice Foundation Inc. All rights reserved.</p>
          {/* <div className="flex flex-wrap gap-3">
            <span>Registered non-profit organization.</span>
            <span>Focused on Nigerian youth and communities.</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
