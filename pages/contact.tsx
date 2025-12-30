import Head from "next/head";
import Image from "next/image";
import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { SlideUp } from "@/components/animation/MotionWrappers";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | One Voice Foundation Inc.</title>
        <meta
          name="description"
          content="Contact One Voice Foundation Inc. with questions, partnership opportunities, or to learn more about supporting Nigerian youth."
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--ov-border)] bg-black text-white">
        <Image
          src="https://res.cloudinary.com/dccph2plo/image/upload/v1767126922/group-young-african-friends-with-facemasks-using-their-phones-park_1_vz9okj.jpg"
          alt="Nigerian students in class"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-[var(--ov-secondary-green-deep)]/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <SlideUp className="max-w-2xl">
            <p className="font-dm-sans text-xs uppercase tracking-[0.25em] text-[var(--ov-secondary-green-soft)]">
              Contact
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-[2.4rem]">
              We would love to hear from you
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 font-dm-sans md:text-base">
              Whether you&apos;re exploring a partnership, have a question, or simply want to connect, we&apos;re
              here to listen.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="bg-[var(--ov-secondary-green-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <SlideUp className="rounded-3xl bg-white/95 p-6 shadow-lg ring-1 ring-[var(--ov-border)] md:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
              {/* Form */}
              <div>
                <p className="heading-display text-[11px] tracking-[0.25em] text-[var(--ov-secondary-green)]">
                  Get in Touch
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-neutral-900 md:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-3 text-sm text-neutral-600 font-dm-sans md:text-base">
                  Share a bit about who you are and how we can support you. We aim to respond within a few
                  business days.
                </p>

                <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-[var(--ov-border)] bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 outline-none ring-0 focus:border-[var(--ov-secondary-green)] focus:ring-2 focus:ring-[var(--ov-secondary-green)] font-dm-sans"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-[var(--ov-border)] bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 outline-none ring-0 focus:border-[var(--ov-secondary-green)] focus:ring-2 focus:ring-[var(--ov-secondary-green)] font-dm-sans"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-[var(--ov-border)] bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 outline-none ring-0 focus:border-[var(--ov-secondary-green)] focus:ring-2 focus:ring-[var(--ov-secondary-green)] font-dm-sans"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-none rounded-xl border border-[var(--ov-border)] bg-neutral-50 px-3 py-3 text-sm text-neutral-900 outline-none ring-0 focus:border-[var(--ov-secondary-green)] focus:ring-2 focus:ring-[var(--ov-secondary-green)] font-dm-sans"
                      placeholder="Share a bit about your question, idea, or request."
                    />
                    <p className="mt-2 text-xs text-neutral-500 font-dm-sans">
                      We respect your privacy and will only use your information to respond to your inquiry.
                    </p>
                  </div>

                  <div className="md:col-span-2 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                    <p className="text-xs text-neutral-500 font-dm-sans">
                      By submitting, you agree to be contacted by One Voice Foundation Inc. regarding your
                      inquiry.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors font-dm-sans"
                    >
                      <span className="mr-2">
                        <MessageCircle size={16} />
                      </span>
                      Send message
                    </button>
                  </div>
                </form>
              </div>

              {/* Direct Contact Info */}
              <div className="space-y-6 border-t border-dashed border-[var(--ov-border)] pt-6 text-sm text-neutral-700 font-dm-sans lg:border-t-0 lg:pt-0 lg:pl-8 lg:border-l">
                <div>
                  <h2 className="text-base font-semibold text-neutral-900">Reach us directly</h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    Prefer to email or message us on social? Use the details below and we&apos;ll make sure your
                    note gets to the right person.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                      <Mail size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                        Organization email
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-900">info@onevoicefoundation.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                      <Instagram size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                        Instagram
                      </p>
                      <p className="mt-1 text-sm text-neutral-900">@onevoicefoundation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]">
                      <Facebook size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                        Facebook
                      </p>
                      <p className="mt-1 text-sm text-neutral-900">One Voice Foundation Inc.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-dashed border-[var(--ov-border)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                    Our commitment
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Every question, idea, and introduction helps us build a stronger future for Nigerian
                    youth. Thank you for taking the time to reach out.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>
    </>
  );
}
