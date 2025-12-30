import Link from "next/link";
import { ChevronRight, Building2, Link2 } from "lucide-react";
import Image from "next/image";
import { SlideUp } from "@/components/animation/MotionWrappers";
export default function ProgramsSection() {
  return (
    <section className="border-b border-[var(--ov-border)] bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <SlideUp className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-[var(--ov-secondary-green)]">
              Our Focus Areas
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
              Support That Meets Youth Where They Are
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 font-dm-sans">
            From healthcare to education to community, One Voice Foundation Inc. invests in the
            essentials every young person needs to thrive.
          </p>
        </SlideUp>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* Card 1 */}
          <SlideUp className="flex flex-col overflow-hidden rounded-2xl border border-[var(--ov-border)] bg-white shadow-sm" delay={0.05}>
            <div className="relative h-60 w-full flex items-center justify-center">
             <Image
               src="https://res.cloudinary.com/dccph2plo/image/upload/v1767103991/africa-humanitarian-aid-doctor-taking-care-patient_zdb6r4.jpg"
               alt="Doctor providing care to a young patient"
               fill
               className="object-cover object-top "
               priority
             />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                Youth Health Insurance Initiative
              </p>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                Treatment & Protection
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
                Providing health insurance to 200+ Nigerian youth annually so that families are not
                forced to choose between treatment and survival.
              </p>
              <Link href={'/programs'} className="mt-4 inline-flex items-center gap-1 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-[var(--ov-secondary-green)] hover:bg-[var(--ov-secondary-green-soft)] hover:text-black transition-colors font-dm-sans">
                <span>View Program</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </SlideUp>

          {/* Card 2 */}
          <SlideUp className="flex flex-col overflow-hidden rounded-2xl border border-[var(--ov-border)] bg-white shadow-sm" delay={0.12}>
            <div className="relative h-60 w-full flex items-center justify-center">
                 <Image
                   src="https://res.cloudinary.com/dccph2plo/image/upload/v1767103380/study-group-african-people_1_vqagfv.jpg"
                   alt="Students studying together in a classroom"
                   fill
                   className="object-cover object-top "
                   priority
                 />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                Back-to-School Youth Support Program
              </p>
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                Education Support
              </h3>
              <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
                Equipping disadvantaged youth with notebooks, school bags, and writing materials so
                no child is left behind.
              </p>
              <Link href={'/programs'} className="mt-4 inline-flex items-center gap-1 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-[var(--ov-secondary-green)] hover:bg-[var(--ov-secondary-green-soft)] hover:text-black transition-colors font-dm-sans">
                <span>View Program</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </SlideUp>

          {/* Card 3 – CTA style */}
          <SlideUp className="relative flex flex-col justify-between rounded-2xl bg-[var(--ov-secondary-green)] px-5 py-6 text-white shadow-md overflow-hidden">
  {/* Image as background - add pointer-events-none and z-0 */}
  <Image
    src="https://res.cloudinary.com/dccph2plo/image/upload/v1767119441/group-cheerful-friends-with-facemasks-taking-selfie-park_1_meebdl.jpg"
    alt="Nigerian students in class"
    fill
    priority
    className="object-cover object-center opacity-20 rounded-2xl pointer-events-none z-0"
  />

  {/* Content wrapper with relative positioning and higher z-index */}
  <div className="relative z-10 flex flex-col justify-between h-full">
    <div>
      <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white">
        <Building2 size={18} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 font-dm-sans">
        Contribute Today
      </p>
      <h3 className="mt-3 text-xl font-semibold">
        Your Support Makes
        <span className="block">Change Possible</span>
      </h3>
      <p className="mt-3 text-sm text-white/90 font-dm-sans">
        Every donation—large or small—helps insure a youth, supply a classroom, or build a
        safer community.
      </p>
    </div>
    <div className="mt-5">
      <Link
        href="/donate"
        className="inline-flex items-center rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ea580c] transition-colors font-dm-sans"
      >
        Join Us Now
      </Link>
    </div>
  </div>
</SlideUp>
        </div>
      </div>
    </section>
  );
}
