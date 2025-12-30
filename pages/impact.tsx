import Head from "next/head";
import Image from "next/image";
import { HeartPulse, GraduationCap, Globe2 } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";
import CountUp from "react-countup";

export default function ImpactPage() {
  return (
    <>
      <Head>
        <title>Impact | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="See the current and projected impact of One Voice Foundation Inc. and our vision for growth across Nigeria."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767100437/boy-rising-hand-class_1_i84wj3.jpg"
          alt="Nigerian students in class"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-[var(--ov-secondary-green-deep)]/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              Our Impact
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.6rem]">
              Measuring change in young lives
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              We track both numbers and stories—youth who are healthier, better equipped for school, and more
              hopeful about their future.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Current Impact */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <SlideUp className="md:flex md:items-center md:justify-between">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green)]">
                Where we are making a difference
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Early results we are building on
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-neutral-700 font-dm-sans md:text-base">
                Through our early-stage programs and growing network of partners, we are already seeing lives
                change. These numbers will continue to evolve as our work expands.
              </p>
            </div>
          </SlideUp>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5">
              <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
                <HeartPulse size={18} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Youth insured
              </p>
              <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={200} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
                youth insured annually through the Youth Health Insurance Initiative.
              </p>
            </SlideUp>
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5" delay={0.06}>
              <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
                <GraduationCap size={18} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Students supported
              </p>
              <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
                receiving books, notebooks, school bags, and writing materials every year.
              </p>
            </SlideUp>
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-5" delay={0.12}>
              <div className="mb-2 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] p-2 text-[var(--ov-secondary-green)]">
                <Globe2 size={18} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Communities engaged
              </p>
              <p className="mt-3 text-3xl font-semibold text-neutral-900">
<CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
                communities across Nigeria involved in planning and implementing youth-focused initiatives.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Stories and Outcomes */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767119438/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-making-selfie-phone-education-theme_1_gkstqt.jpg"
          alt="Group of African students together"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative bg-black/55">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <SlideUp>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Behind every number is a life
                </h2>
              </SlideUp>
              <SlideUp delay={0.06} className="space-y-4 text-sm text-white/85 font-dm-sans md:text-base">
                <p>
                  Every insured youth, every student who receives school supplies, and every community we
                  partner with represents a story of resilience and hope.
                </p>
                <p>
                  As our work grows, we will continue to highlight real experiences—from classrooms to
                  clinics to community spaces—to honor the young people we serve and the donors who make this
                  work possible.
                </p>
                <p>
                  This page will keep evolving with testimonies, photos, and reports that bring the numbers to
                  life.
                </p>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Growth */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                Our Vision for Growth
              </h2>
            </div>
            <div className="space-y-4 text-sm text-neutral-600 font-dm-sans md:text-base">
              <p>
                Our work is only beginning. In the coming years, One Voice Foundation Inc. aims to:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-neutral-900">Expand programs yearly</span> – so that more youth gain access to healthcare and education support.
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">Reach more regions across Nigeria</span> – with a particular focus on underserved and hard-to-reach communities.
                </li>
                <li>
                  <span className="font-semibold text-neutral-900">Build long-term infrastructure for youth development</span> – including community health clinics, youth centers, and safe spaces for recreation and learning.
                </li>
              </ul>
              <p>
                We invite donors, partners, and Nigerians in the diaspora to help turn this vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
