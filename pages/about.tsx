import Head from "next/head";
import Image from "next/image";
import { SlideUp } from "@/components/animation/MotionWrappers";

const founders = [
  {
    name: "Chike Ezeosim",
    image:
      "https://res.cloudinary.com/dccph2plo/image/upload/v1768161489/WhatsApp_Image_2026-01-11_at_8.52.43_PM_gjx1su.jpg",
  },
  {
    name: "Emeka Onyeiwu",
    image:
      "https://res.cloudinary.com/dccph2plo/image/upload/v1768161488/WhatsApp_Image_2026-01-11_at_8.52.43_PM_1_gnbrgh.jpg",
  },
  {
    name: "Collins Idedevbo",
    image:
      "https://res.cloudinary.com/dccph2plo/image/upload/v1768161488/WhatsApp_Image_2026-01-11_at_8.52.43_PM_2_w7aj1o.jpg",
  },
  {
    name: "Michael Majekodunmi",
    image:
      "https://res.cloudinary.com/dccph2plo/image/upload/v1768161687/WhatsApp_Image_2026-01-11_at_8.52.44_PM_oyaklq.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="Learn about One Voice Foundation Inc., a non-profit founded by Nigerians in the diaspora to uplift Nigerian youth through health, education, and opportunity."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126917/african-children-standing-head-head_3_qwivqw.jpg"
          alt="Nigerian students in class"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[var(--ov-secondary-green-deep)]/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl lg:flex lg:justify-center lg:items-center lg:flex-col lg:max-w-5xl ">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              About Us
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[3rem] lg:text-center ">
              One Voice for Nigeria&apos;s Youth and Future
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base lg:text-center">
              One Voice Foundation Inc. is committed to strengthening the future of Nigeria by supporting its
              youth today. Founded by Nigerians in the diaspora, we believe that distance does not erase
              responsibility.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-soft)]">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)] md:items-start">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-deep)]">
                Who We Are
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                A diaspora-led foundation standing with Nigerian youth
              </h2>
            </div>
            <div className="space-y-4 text-sm text-neutral-800 font-dm-sans md:text-base">
              <p>
                One Voice Foundation Inc. is a non-profit organization established by Nigerians living abroad
                who remain deeply connected to the realities back home. We are professionals,
                community members, and advocates who share a simple belief: every young person in Nigeria
                deserves access to health, education, and opportunity.
              </p>
              <p>
                We work hand in hand with local partners, schools, and community leaders to deliver
                practical support that meets real needs on the ground. Our approach is rooted in listening,
                collaboration, and long-term commitment.
              </p>
              <p className="font-semibold text-neutral-900">
                One Voice Foundation Inc. is a non-profit organization founded by Nigerians in the diaspora
                who believe distance does not erase responsibility.
              </p>
            </div>
          </div>
        </SlideUp>
      </section>

      {/* Meet the Founders */}
      <section className="border-b border-[var(--ov-border)] bg-white">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="flex flex-col items-center gap-10">
            <div className="text-left w-full md:max-w-xl lg:max-w-5xl lg:text-center">
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green)]">
                Meet the founders
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Faces behind the vision
              </h2>
              <p className="mt-4 text-sm text-neutral-700 font-dm-sans md:text-base">
                Dedicated Nigerians in the diaspora who believe in a future where every young person has the
                chance to thrive.
              </p>
            </div>

            <div className="grid w-full gap-6 sm:grid-cols-2">
              {founders.map((founder, index) => (
                <article
                  key={`${founder.name}-${index}`}
                  className="group overflow-hidden rounded-2xl border border-[var(--ov-border)] bg-black shadow-sm w-full  lg:w-[80%] lg:mx-auto"
                >
                  <div className="relative h-[500px] w-full md:h-[460px]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col">
                      <p className="text-sm  lg:text-2xl font-semibold text-white">{founder.name}</p>
                     
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SlideUp>
      </section>

      {/* Why We Exist – image-backed strip */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767119441/group-cheerful-friends-with-facemasks-taking-selfie-park_1_meebdl.jpg"
          alt="Nigerian youth together"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative bg-[rgba(0,0,0,0.6)]">
          <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
            <div className="grid gap-10 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)] md:items-start">
              <div>
                <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
                  Why We Exist
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  Standing with young people in the face of real challenges
                </h2>
              </div>
              <div className="space-y-4 text-sm text-white/85 font-dm-sans md:text-base">
                <p>
                  Nigeria is a nation of extraordinary talent and potential, but many of its young people are
                  growing up under intense pressure. Economic hardship, under-resourced schools, limited
                  access to healthcare, and a lack of safe recreational spaces all contribute to a cycle that
                  holds youth back.
                </p>
                <p>
                  Short-term interventions alone cannot solve this. Youth need consistent support, stable
                  systems, and communities that are empowered to care for their own. One Voice Foundation
                  Inc. exists to help close these gaps by working towards long-term, community-driven
                  solutions.
                </p>
                <p>
                  We focus on initiatives that strengthen families, support schools, and empower communities
                  to protect and uplift their youth. Our work is designed not just to respond to crises, but
                  to build resilience and opportunity over time.
                </p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Mission and Values – deep green cards */}
      <section className="border-b border-[var(--ov-border)] bg-[var(--ov-secondary-green-deep)] text-white">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
                Our Mission
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                To uplift Nigerian youth through health, education, and opportunity
              </h2>
              <p className="mt-4 text-sm text-white/85 font-dm-sans md:text-base">
                Every program we run is designed to remove barriers for young people so they can learn,
                grow, and lead in their communities.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ov-secondary-green-soft)]">
                Our Values
              </h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-white/90 font-dm-sans">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <dt className="text-sm font-semibold text-white">Community</dt>
                  <dd className="mt-1 text-sm">
                    We listen to local voices, respect community leadership, and build with people—not just
                    for them.
                  </dd>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <dt className="text-sm font-semibold text-white">Transparency</dt>
                  <dd className="mt-1 text-sm">
                    We are clear about how funds are raised, allocated, and used from start to finish.
                  </dd>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <dt className="text-sm font-semibold text-white">Accountability</dt>
                  <dd className="mt-1 text-sm">
                    We measure our impact, share results, and continuously learn so we can do better for
                    young people.
                  </dd>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <dt className="text-sm font-semibold text-white">Sustainable Impact</dt>
                  <dd className="mt-1 text-sm">
                    We invest in programs that can grow and endure, not just one-time projects.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
