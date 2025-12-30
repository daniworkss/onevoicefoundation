import { ShieldCheck, HandHeart, Globe2 } from "lucide-react";
import Image from "next/image";
import { SlideUp } from "@/components/animation/MotionWrappers";

export default function WhyOneVoiceSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
      <Image
        src="https://res.cloudinary.com/dccph2plo/image/upload/v1767119441/group-cheerful-friends-with-facemasks-taking-selfie-park_1_meebdl.jpg"
        alt="Nigerian students in class"
        fill
        priority
        className="object-cover object-center opacity-35 pointer-none: "
      />
      <div className="relative bg-black/45">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <div className="md:flex md:items-end md:justify-between md:gap-10">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-white">
                Why One Voice?
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                A Trusted Bridge Between the Diaspora and Nigerian Youth
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/75 font-dm-sans md:text-base">
              We combine lived experience in Nigeria with the resources of the diaspora to deliver
              support that is transparent, accountable, and rooted in local partnerships.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <SlideUp
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-white/30"
              delay={0.05}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <ShieldCheck size={18} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900">
                Registered & Transparent
              </h3>
              <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                One Voice Foundation Inc. operates as a formal non-profit with clear reporting,
                documented programs, and accountable governance.
              </p>
            </SlideUp>

            <SlideUp
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-white/30"
              delay={0.12}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <HandHeart size={18} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900">Local Partnerships</h3>
              <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                We work with schools, clinics, and community leaders in Nigeria, ensuring that
                support reaches real families and real youth.
              </p>
            </SlideUp>

            <SlideUp
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-white/30"
              delay={0.19}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                <Globe2 size={18} />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900">
                Diaspora-Led, Youth-Focused
              </h3>
              <p className="mt-2 text-sm text-neutral-700 font-dm-sans">
                Founded by Nigerians in the diaspora who remain committed to home, with every
                initiative designed around the realities of young people in Nigeria.
              </p>
            </SlideUp>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
