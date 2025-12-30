import Link from "next/link";
import Image from "next/image";
import { SlideInLeft, SlideInRight } from "@/components/animation/MotionWrappers";
import { SlideUp } from "@/components/animation/MotionWrappers";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--ov-secondary-green)] border-b border-[var(--ov-border)] text-white  lg:h-[550px]">
      {/* Background image; green background remains as fallback */}
      <Image
        src="https://res.cloudinary.com/dccph2plo/image/upload/v1767100438/boy-holding-white-paper-school_1_rzjt7q.jpg"
        alt="Nigerian boy sitting"
        fill
        priority
        className="object-cover object-center opacity-60"
      />

      <div className="relative max-w-6xl  py-12 md:py-16 mx-auto">
        <div className="md:flex md:items-center md:justify-between md:gap-6  ">
          <SlideInLeft className="md:w-3/5 px-4 md:px-6  lg:w-full">
            <p className="heading-display text-[10px] lg:text-[14px] tracking-[0.3em] lg:ml-2 text-[var(--ov-secondary-green-soft)]">
              ONE VOICE FOUNDATION INC.
            </p>
            <h1 className=" mt-4 text-4xl font-semibold md:text-4xl lg:text-[56px] lg:w-[80%] lg:mt-0">
              <span className="block md:inline uppercase ">One <strong className="">Voice</strong> </span>
              <span className="block md:inline  uppercase">One <strong className="font-black text-green-500">Nigeria.</strong></span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/90 font-dm-sans md:text-base">
              Nigerians at home and in the diaspora standing together to support our youth through health,
              education, and opportunity.
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              Distance does not erase responsibility. Together, we can build the future of Nigeria’s youth.
            </p>

            <SlideUp delay={0.1} className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/donate"
                className="rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#ea580c] transition-colors font-dm-sans"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-dm-sans"
              >
                Be a Volunteer
              </Link>
            </SlideUp>

            <p className="mt-5 text-xs text-white/80 font-dm-sans md:text-sm">
              One Voice. One Nigeria. One future built for our youth.
            </p>
          </SlideInLeft>

          {/* Hero image placeholder */}
          <SlideInRight className="mt-8 md:mt-0  relative lg:w-full h-64 lg:h-110 px-4 " delay={0.2}>
            <div className="relative   h-64 w-full md:h-72 lg:h-100 flex items-center justify-center"> 
                <Image
                  src="https://res.cloudinary.com/dccph2plo/image/upload/v1767100438/medium-shot-happy-african-people_1_xhfglb.jpg"
                  alt="Smiling African youth standing together"
                  fill
                  priority
                  className="object-cover rounded-md"
                />
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
