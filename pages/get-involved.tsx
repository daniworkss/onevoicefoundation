import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HandHeart, Users2, HeartHandshake } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";
export default function GetInvolvedPage() {
  return (
    <>
      <Head>
        <title>Get Involved | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="Discover ways to support One Voice Foundation Inc. through donations, sponsorship, partnerships, and volunteering."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126922/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks_1_trdk1t.jpg"
          alt="Nigerian students in class"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[var(--ov-secondary-green-deep)]/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              Get Involved
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.6rem]">
              Your participation changes futures
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              Whether you live in Nigeria, are part of the diaspora, or support youth globally, there is a
              meaningful way for you to make a difference.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <SlideUp>
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Ways you can help</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-700 font-dm-sans md:text-base">
              Support can look like giving, partnering, or offering your time and skills. Here are a few
              pathways to stand with Nigerian youth.
            </p>
          </SlideUp>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Donate */}
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-white p-6 shadow-sm">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <HandHeart size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">Donate</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                One-time or monthly giving
              </p>
              <p className="mt-3 text-sm text-neutral-600 font-dm-sans">
                Your financial support directly funds youth health insurance, school supplies, and
                community-based youth programs. Consider becoming a monthly donor to provide stable,
                predictable support.
              </p>
              <Link
                href="/donate"
                className="mt-4 inline-flex items-center rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors font-dm-sans"
              >
               <p className="text-white">Donate now</p>
              </Link>
            </SlideUp>

            {/* Sponsor a Youth */}
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-6" delay={0.06}>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <HeartHandshake size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">Sponsor a youth</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                Direct, focused support
              </p>
              <p className="mt-3 text-sm text-neutral-600 font-dm-sans">
                Sponsoring a youth helps cover key needs such as health insurance, school materials, and
                access to safe, structured programs. Sponsors receive updates on the impact of their
                support.
              </p>
              <p className="mt-3 text-xs text-neutral-500 font-dm-sans">
                For sponsorship opportunities, please contact us directly using the form on the Contact page.
              </p>
            </SlideUp>

            {/* Partner as an Organization */}
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-white p-6" delay={0.12}>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <Users2 size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">Partner as an organization</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                Collaboration for greater reach
              </p>
              <p className="mt-3 text-sm text-neutral-600 font-dm-sans">
                We welcome partnerships with NGOs, schools, corporate entities, and community groups that
                share our commitment to Nigerian youth. Together, we can expand our reach and design stronger
                programs.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center rounded-full border border-[var(--ov-secondary-green)] px-5 py-2.5 text-sm font-semibold text-[var(--ov-secondary-green)] hover:bg-[var(--ov-secondary-green-soft)] transition-colors font-dm-sans"
              >
                Become a partner
              </Link>
            </SlideUp>

            {/* Volunteer */}
            <SlideUp className="rounded-2xl border border-[var(--ov-border)] bg-neutral-50 p-6" delay={0.18}>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <Users2 size={18} />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">Volunteer</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-600 font-dm-sans">
                Locally or from the diaspora
              </p>
              <p className="mt-3 text-sm text-neutral-600 font-dm-sans">
                Volunteers are essential to our mission. Whether based in Nigeria or abroad, you can support
                outreach, share professional expertise, mentor youth, or assist with communications and
                fundraising.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:border-[var(--ov-secondary-green)] hover:text-[var(--ov-secondary-green)] transition-colors font-dm-sans"
              >
                Sign up to volunteer
              </Link>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Collective Responsibility */}
      <section className="bg-[var(--ov-secondary-green)] text-white relative overflow-hidden">
  {/* Background image - needs z-0 and pointer-events-none */}
      <Image 
        src={'https://res.cloudinary.com/dccph2plo/image/upload/v1767126920/medium-shot-student-with-smartphone_1_sr9bwb.jpg'} 
        fill 
        className="pointer-events-none z-0 object-cover opacity-20"
        alt="Student with smartphone"
      />
  
  {/* Content - needs relative positioning and higher z-index */}
  <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
    <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">
          Shared Responsibility, Shared Impact
        </h2>
        <p className="mt-3 text-sm text-white/90 font-dm-sans md:text-base">
          Every positive change begins with a decision to act. When individuals, families, communities, and organizations stand together, we can transform the future of Nigerian youth.
        </p>
        <p className="mt-3 text-sm text-white/90 font-dm-sans md:text-base">
          Your involvement—whether through donations, sponsorship, partnership, or volunteering—sends a clear message: Nigerian youth are not forgotten. They are seen, valued, and supported.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <Link
          href="/donate"
          className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-[var(--ov-secondary-green)] shadow-sm hover:bg-neutral-100 transition-colors font-dm-sans"
        >
          Join the Movement
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-dm-sans"
        >
          Talk to Our Team
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
