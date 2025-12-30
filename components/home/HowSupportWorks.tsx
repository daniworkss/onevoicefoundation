import { ArrowRight, Users, HeartHandshake, School2 } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";

export default function HowSupportWorks() {
  return (
    <section className="border-b border-[var(--ov-border)] bg-white">
      <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-[var(--ov-secondary-green)]">
              How Your Support Works
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
              From Your Gift to a Young Life in Nigeria
            </h2>
          </div>
          <p className="mt-3 max-w-md text-sm text-neutral-600 font-dm-sans md:text-base">
            A simple, transparent path—from donors and partners, to local teams in Nigeria, to the
            youth and families who need support the most.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1.2fr)] md:items-center">
          <SlideUp className="rounded-2xl bg-neutral-50 p-5 shadow-sm" delay={0.05}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
              <Users size={18} />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">You & Our Partners</h3>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              Individuals, families, and organizations in Nigeria and the diaspora give, sponsor, and
              collaborate with One Voice Foundation Inc.
            </p>
          </SlideUp>

          <div className="hidden justify-center md:flex">
            <ArrowRight className="h-5 w-5 text-neutral-400" />
          </div>

          <SlideUp className="rounded-2xl bg-neutral-50 p-5 shadow-sm" delay={0.12}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
              <HeartHandshake size={18} />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">Local Teams & Programs</h3>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              We channel resources through vetted local partners, clinics, schools, and community
              leaders to design practical interventions.
            </p>
          </SlideUp>

          <div className="hidden justify-center md:flex">
            <ArrowRight className="h-5 w-5 text-neutral-400" />
          </div>

          <SlideUp className="rounded-2xl bg-neutral-50 p-5 shadow-sm" delay={0.2}>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
              <School2 size={18} />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">Youth & Communities</h3>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              Youth receive health cover, school materials, and safe spaces—while communities gain
              stronger structures to support them.
            </p>
          </SlideUp>
        </div>
      </SlideUp>
    </section>
  );
}
