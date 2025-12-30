import Head from "next/head";
import Image from "next/image";
import { HeartPulse, GraduationCap, Building2 } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Our Programs | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="Discover One Voice Foundation Inc. programs: Youth Health Insurance Initiative, Back-to-School Youth Support Program, and community development vision."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126117/img-20210323-wa0037_fyug6y.webp"
          alt="Programs-images"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[var(--ov-secondary-green-deep)]/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              Our Programs
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.6rem]">
              Practical support, built for long-term change
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              Our programs are designed to meet core needs of Nigerian youth—health, education, and safe
              community spaces—so that support lasts beyond a single moment.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Youth Health Insurance Initiative */}
      <section className="border-b border-[var(--ov-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start">
            <SlideUp>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green)]">
                Core program
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Youth Health Insurance Initiative
              </h2>
              <p className="mt-3 text-sm font-dm-sans text-neutral-700 md:text-base">
                Goal: Provide health insurance to 200+ Nigerian youth annually.
              </p>
              <p className="mt-4 text-sm text-neutral-700 font-dm-sans md:text-base">
                Access to healthcare should never be a privilege reserved for a few. Through this initiative,
                we help cover the cost of basic health insurance for Nigerian youth who would otherwise go
                without coverage.
              </p>
              <p className="mt-3 text-sm text-neutral-700 font-dm-sans md:text-base">
                The program focuses on clinic and hospital access, reducing the financial burden on families
                facing emergencies, and promoting early treatment and preventive care.
              </p>
            </SlideUp>

            <SlideUp delay={0.08}>
              <div className="overflow-hidden rounded-2xl bg-[var(--ov-secondary-green-soft)] p-5 shadow-sm ring-1 ring-[var(--ov-border)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--ov-secondary-green)]">
                  <HeartPulse size={20} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans">
                  What this program provides
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-800 font-dm-sans">
                  <li>• Basic health insurance coverage for youth in partner communities.</li>
                  <li>• Support for clinic visits, medications, and early treatment.</li>
                  <li>• Health education through local partners and clinics.</li>
                </ul>
                <p className="mt-4 text-xs text-neutral-600 font-dm-sans">
                  As funding grows, we aim to expand coverage to more youth and partner with additional
                  healthcare providers across Nigeria.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Back-to-School Youth Support Program */}
      <section className="border-b border-[var(--ov-border)] bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start">
            <SlideUp>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green)]">
                Education support
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Back-to-School Youth Support Program
              </h2>
            </SlideUp>
            <SlideUp delay={0.06} className="space-y-4 text-sm text-neutral-600 font-dm-sans md:text-base">
              <p>
                No child should stay home from school because they lack basic learning materials. This program
                ensures that young students have the tools they need to participate fully in their education.
              </p>
              <p>
                We provide books, notebooks, school bags, and writing materials to students in need, focusing on
                disadvantaged youth in communities where school resources are limited.
              </p>
              <p>
                By removing simple yet critical barriers, we help ensure that no child is left behind due to
                lack of resources.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 text-xs text-neutral-700">
                <div className="rounded-2xl bg-white p-3 ring-1 ring-[var(--ov-border)]">
                  <p className="font-semibold text-neutral-900">School kits</p>
                  <p className="mt-1">Notebooks, pens, pencils, and bags for returning students.</p>
                </div>
                <div className="rounded-2xl bg-white p-3 ring-1 ring-[var(--ov-border)]">
                  <p className="font-semibold text-neutral-900">Focus on equity</p>
                  <p className="mt-1">Priority for youth in under-resourced schools and communities.</p>
                </div>
                <div className="rounded-2xl bg-white p-3 ring-1 ring-[var(--ov-border)]">
                  <p className="font-semibold text-neutral-900">Dignity &amp; hope</p>
                  <p className="mt-1">Helping students show up prepared and confident on day one.</p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Community Development Vision */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-deep)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)] md:items-start">
            <SlideUp>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
                Looking ahead
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Community development &amp; youth engagement vision
              </h2>
              <p className="mt-3 text-sm text-white/85 font-dm-sans md:text-base">
                Beyond immediate support, we are working toward environments where young people can grow,
                connect, and discover their potential.
              </p>
            </SlideUp>
            <SlideUp delay={0.08} className="space-y-4 text-sm text-white/85 font-dm-sans md:text-base">
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ov-secondary-green-soft)]">
                    Community health clinics
                  </p>
                  <p className="mt-2 text-sm">
                    Accessible health centers within communities that provide basic medical care, health
                    education, and early intervention for youth.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ov-secondary-green-soft)]">
                    Youth recreation &amp; mentorship centers
                  </p>
                  <p className="mt-2 text-sm">
                    Safe, supervised spaces where young people can participate in sports, arts, mentoring,
                    and skills development.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ov-secondary-green-soft)]">
                    Safe spaces for growth
                  </p>
                  <p className="mt-2 text-sm">
                    Facilities and programs that give youth positive alternatives to crime and violence,
                    helping them build confidence, leadership, and life skills.
                  </p>
                </div>
              </div>
              <p className="pt-2 text-xs text-white/75">
                This vision is being built step by step as resources and partnerships grow. Our aim is to help
                communities create and sustain these spaces for generations to come.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>
    </>
  );
}
