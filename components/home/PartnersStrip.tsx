import { SlideUp } from "@/components/animation/MotionWrappers";

export default function PartnersStrip() {
  return (
    <section className="border-t border-[var(--ov-border)] bg-white">
      <SlideUp className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="items-center gap-6 md:flex md:justify-between">
          <div className="max-w-md">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-neutral-500">
              Partners & Community
            </p>
            <h2 className="mt-2 text-sm font-semibold text-neutral-900 md:text-base">
              Working with schools, clinics, faith communities, and local leaders across Nigeria.
            </h2>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-0 md:justify-end">
            <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-dm-sans text-neutral-700">
              Schools & Educational Partners
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-dm-sans text-neutral-700">
              Clinics & Health Providers
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-dm-sans text-neutral-700">
              Faith & Community Organizations
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-dm-sans text-neutral-700">
              Corporate / Philanthropy
            </span>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
