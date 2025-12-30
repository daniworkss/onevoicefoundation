import Link from "next/link";
import { SlideInLeft, SlideInRight } from "@/components/animation/MotionWrappers";
import { SlideUp } from "@/components/animation/MotionWrappers";
import Image from "next/image";
export default function AboutStrip() {
  return (
    <section className="border-b border-[var(--ov-border)] bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,3fr)] md:items-center">
          {/* Image placeholder */}
          <SlideUp>
            <div className="relative h-64 w-full md:h-72 lg:h-80 flex items-center justify-center">
            <Image src={'https://res.cloudinary.com/dccph2plo/image/upload/v1767119333/Nigeria-Youth-Activism-ed_gdsea3.jpg'} fill priority className=""/>
            </div>
          </SlideUp>

          {/* Text */}
          <SlideInRight delay={0.1}>
            <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-[var(--ov-secondary-green)]">
              Let’s Make a Difference.
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
              A Trusted Youth-Focused Non-Profit Organization
            </h2>
            <p className="mt-3 text-sm text-neutral-600 font-dm-sans md:text-base">
              One Voice Foundation Inc. is a non-profit founded by Nigerians in the diaspora who believe
              distance does not erase responsibility. We partner with communities, schools, and local
              leaders to deliver support that truly reaches Nigerian youth.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700 font-dm-sans">
              <li>• Providing essential health insurance and medical support to vulnerable youth.</li>
              <li>• Supplying books, notebooks, school bags, and writing materials to keep children in school.</li>
              <li>• Facilitating community development projects that create safe spaces and mentorship.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#ea580c] transition-colors font-dm-sans"
              >
               <p className="text-white"> Support Now</p>
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 hover:border-[var(--ov-secondary-green)] hover:text-[var(--ov-secondary-green)] transition-colors font-dm-sans"
              >
                Learn More About Us
              </Link>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
