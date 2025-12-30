"use client";

import Slider from "react-slick";
import Image from "next/image";
import { SlideUp } from "@/components/animation/MotionWrappers";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "When my son fell sick, we had somewhere to turn. The health insurance support meant we could focus on his recovery, not on how to pay the bill.",
    name: "Mrs. Adaeze",
    role: "Parent, Enugu State",
    tag: "Youth Health Insurance Initiative",
    initials: "MA",
  },
  {
    quote:
      "Going back to school with a proper bag and books changed how I felt in class. I could focus on learning instead of worrying about what I didn’t have.",
    name: "Chidera, 15",
    role: "Student, Lagos State",
    tag: "Back-to-School Youth Support Program",
    initials: "C",
  },
  {
    quote:
      "One Voice is helping our community create safe spaces where young people can play, talk, and dream bigger than the streets around them.",
    name: "Pastor John",
    role: "Community Leader, Rivers State",
    tag: "Community & Youth Engagement",
    initials: "PJ",
  },
];

export default function StoriesSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  } as const;

  return (
    <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dccph2plo/image/upload/v1767100437/boy-rising-hand-class_1_i84wj3.jpg"
        alt="Nigerian boy raising his hand in class"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SlideUp>
          <div className="space-y-4 md:flex md:items-end md:justify-between md:gap-12 md:space-y-0">
            <div>
              <p className="font-dm-sans text-xs uppercase tracking-[0.3em] text-white/70">
                Stories from the Ground
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Real Lives, Real Impact
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/80 font-dm-sans md:text-base">
              Voices from families, students, and community leaders whose lives are being touched by
              One Voice Foundation Inc.
            </p>
          </div>
        </SlideUp>

        <div className="mt-14 max-w-4xl mx-auto">
          <SlideUp delay={0.05}>
            <Slider {...settings}>
              {stories.map((story, index) => (
                <div key={index} className="px-2 md:px-4">
                  <article className="space-y-6 md:space-y-7 min-h-[220px] md:min-h-[260px]">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 font-dm-sans">
                      {story.tag}
                    </span>

                    <div className="relative">
                      <div className="pointer-events-none absolute -left-2 -top-6 text-white/15 md:-left-4 md:-top-8">
                        <Quote size={46} />
                      </div>
                      <p className="relative text-base leading-relaxed text-white/90 font-dm-sans md:text-xl md:leading-relaxed">
                        “{story.quote}”
                      </p>
                    </div>

                    <div className="h-px w-10 bg-white/35" />

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                        {story.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{story.name}</p>
                        <p className="text-xs text-white/70 font-dm-sans">{story.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
