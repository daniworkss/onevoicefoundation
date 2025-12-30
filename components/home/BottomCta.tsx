import Link from "next/link";
import Image from "next/image";
import { SlideUp } from "@/components/animation/MotionWrappers";

export default function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--ov-secondary-green)] text-white">
      <Image
        src="https://res.cloudinary.com/dccph2plo/image/upload/v1767119438/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-making-selfie-phone-education-theme_1_gkstqt.jpg"
        alt="Nigerian boy raising his hand in class"
        fill
        priority
        className="object-cover object-center opacity-35"
      />
      <div className="relative bg-black/30">
        <SlideUp className="mx-auto max-w-6xl px-4 py-14 md:flex md:items-center md:justify-between md:px-6 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Your Voice. Their Future.
            </h2>
            <p className="mt-3 text-sm text-white/90 font-dm-sans md:text-base">
              Nigerians in the diaspora and global donors can stand together to secure the future of
              Nigeria’s youth. Your support today becomes tomorrow’s opportunity.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-0 md:justify-end">
            <Link
              href="/donate"
              className="rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-[var(--ov-secondary-green)] shadow-sm hover:bg-neutral-100 transition-colors font-dm-sans"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-dm-sans"
            >
              Get Involved
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
