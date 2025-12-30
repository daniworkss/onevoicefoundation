import { HeartPulse, Backpack, Shield } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";
import Image from "next/image";
export default function HighlightsRow() {
  return (
    <section className="bg-neutral-50 border-b border-[var(--ov-border)]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <SlideUp>
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.2em] text-[var(--ov-secondary-green)]">
                End-of-Year Focus
              </p>
              <h2 className="mt-1 text-xl font-semibold text-neutral-900 md:text-2xl">
                How One Voice Supports Nigeria’s Youth
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-600 font-dm-sans">
              Three simple commitments—health, education, and safe communities—guide everything we do
              across Nigeria.
            </p>
          </div>
        </SlideUp>

        <div className="grid gap-4 text-sm font-dm-sans text-neutral-700 md:grid-cols-3">
          <SlideUp className=" relative flex flex-col gap-3 rounded-2xl bg-[var(--ov-secondary-green)] p-4 shadow-sm ring-1 ring-neutral-200/60" delay={0.05}>
            <Image
                  src="https://res.cloudinary.com/dccph2plo/image/upload/v1767125833/depositphotos_663694952-stock-photo-ikeja-lagos-state-nigeria-october_emmk8y.webp"
                  alt="Nigerian students in class"
                  fill
                  priority
                  className="object-cover object-center opacity-15 rounded-2xl pointer-events-none z-0"
              />
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--ov-secondary-green)]">
              <HeartPulse size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Youth Health
              </p>
              <p className="mt-1 text-sm text-white/80">
                Health insurance and basic care so treatable illnesses do not become life-long barriers.
              </p>
            </div>
          </SlideUp>

          <SlideUp className=" relative flex flex-col gap-3 rounded-2xl bg-[var(--ov-secondary-green)] p-4 shadow-sm ring-1 ring-neutral-200/60" delay={0.1}>
             <Image
                  src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126117/img-20210323-wa0037_fyug6y.webp"
                  alt="Nigerian students in class"
                  fill
                  priority
                  className="object-cover object-center opacity-15 rounded-2xl pointer-events-none z-0"
              />
            
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--ov-secondary-green)]">
              <Backpack size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Back-to-School
              </p>
              <p className="mt-1 text-sm text-white/80">
                Books, bags, and supplies that keep Nigerian youth present, prepared, and confident in
                the classroom.
              </p>
            </div>
          </SlideUp>

          <SlideUp className=" relative flex flex-col gap-3 rounded-2xl bg-[var(--ov-secondary-green)] p-4 shadow-sm ring-1 ring-neutral-200/60" delay={0.15}>
             <Image
                  src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126258/IMG_0692-1024x768_z0a7pp.jpg"
                  alt="Nigerian students in class"
                  fill
                  priority
                  className="object-cover object-center opacity-15 rounded-2xl pointer-events-none z-0"
              />
            
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--ov-secondary-green)]">
              <Shield size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Safe Communities
              </p>
              <p className="mt-1 text-sm text-white/80">
                Community projects, recreation, and mentorship that give youth structure and safe
                alternatives to crime.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
