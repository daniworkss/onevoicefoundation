import { HeartPulse, GraduationCap, Globe2 } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";
import CountUp from "react-countup";

export default function ImpactSection() {
  return (
    <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <SlideUp className="md:flex md:items-center md:justify-between">
          <div>
            <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-[var(--ov-secondary-green)]">
              Our Impact
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
              Measurable Change in Young Lives
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 font-dm-sans md:text-base">
              We track our results carefully so donors and partners can see the difference their support
              makes across Nigeria.
            </p>
          </div>
        </SlideUp>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5">
            <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
              <HeartPulse size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Youth Insured
            </p>
            <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={200} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              youth insured annually through our Youth Health Insurance Initiative.
            </p>
          </SlideUp>
          <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5" delay={0.08}>
            <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
              <GraduationCap size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Students Supported
            </p>
            <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              of students receive back-to-school support every year.
            </p>
          </SlideUp>
          <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5" delay={0.16}>
            <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
              <Globe2 size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Communities Engaged
            </p>
            <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
              communities across Nigeria involved in youth-focused projects and planning.
            </p>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
