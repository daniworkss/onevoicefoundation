import Head from "next/head";
import Image from "next/image";
import { Heart, GraduationCap, ShieldCheck } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";
import StripeZellePanel from "@/components/donate/StripeZellePanel";

export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Donate | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="Donate to One Voice Foundation Inc. and support youth health insurance, education, and community programs across Nigeria."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green)] text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767100437/boy-rising-hand-class_1_i84wj3.jpg"
          alt="Nigerian students in class"
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              Donate
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.6rem]">
              Every contribution moves a young life forward
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              Your generosity fuels healthcare, education, and community programs that help Nigerian youth
              stay healthy, stay in school, and stay hopeful.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Donation Messaging + Stripe/Zelle */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start">
            <SlideUp className="space-y-5">
              <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                Your gift at work
              </h2>
              <p className="text-sm text-neutral-800 font-dm-sans md:text-base">
                No amount is too small to create meaningful change. Each donation helps us reach more youth,
                strengthen our programs, and respond to urgent needs in communities across Nigeria.
              </p>
              <p className="text-sm text-neutral-800 font-dm-sans md:text-base">
                Funds are allocated carefully and transparently to ensure they directly support youth health,
                education, and community initiatives.
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ov-secondary-green)]">
                Suggested donation amounts
              </h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                <li className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-[var(--ov-border)]">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                    <Heart size={18} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-neutral-900">$25</p>
                  <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                    Helps provide school supplies such as books, notebooks, school bags, and writing
                    materials.
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-dm-sans">
                    School supplies
                  </p>
                </li>
                <li className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-[var(--ov-border)]">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-neutral-900">$50</p>
                  <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                    Contributes to the cost of health insurance or medical support for a young person.
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-dm-sans">
                    Health &amp; safety
                  </p>
                </li>
                <li className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-[var(--ov-border)]">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                    <GraduationCap size={18} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-neutral-900">$100</p>
                  <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                    Supports a youth with a more comprehensive package, from health coverage to school
                    supplies and community programs.
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-dm-sans">
                    Comprehensive support
                  </p>
                </li>
              </ul>

              <p className="mt-4 text-sm text-neutral-800 font-dm-sans md:text-base">
                Prefer a different amount? You can always choose a custom donation that fits your capacity
                and your heart.
              </p>
            </SlideUp>

            <SlideUp>
              <StripeZellePanel />
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Transparency and Trust */}
      <section className="bg-[var(--ov-secondary-green-deep)] text-white">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
                Transparency
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                We treat every donation like a promise
              </h2>
              <p className="mt-4 text-sm text-white/85 font-dm-sans md:text-base">
                We understand that trust is essential when you choose to give. One Voice Foundation Inc. is
                committed to clear reporting, regular updates, and responsible stewardship of every
                contribution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-[11px] font-dm-sans uppercase tracking-[0.2em] text-[var(--ov-secondary-green-soft)]">
                  Registered non-profit
                </p>
                <p className="mt-2 text-sm font-semibold">Accountable structure</p>
                <p className="mt-2 text-sm text-white/80">
                  Formal governance and oversight ensure that programs are implemented with integrity and
                  care.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-[11px] font-dm-sans uppercase tracking-[0.2em] text-[var(--ov-secondary-green-soft)]">
                  Clear reporting
                </p>
                <p className="mt-2 text-sm font-semibold">See the impact</p>
                <p className="mt-2 text-sm text-white/80">
                  We share stories, numbers, and outcomes so you can see the real change your gift supports.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-2">
                <p className="text-[11px] font-dm-sans uppercase tracking-[0.2em] text-[var(--ov-secondary-green-soft)]">
                  Local partnerships
                </p>
                <p className="mt-2 text-sm font-semibold">Rooted in community</p>
                <p className="mt-2 text-sm text-white/80">
                  We work closely with schools, clinics, and grassroots leaders so that resources reach the
                  young people who need them most.
                </p>
              </div>
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
