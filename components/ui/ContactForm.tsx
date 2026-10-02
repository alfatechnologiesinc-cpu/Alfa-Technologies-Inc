"use client";

// NOTE: This is a frontend-only static site — there is no backend to receive
// submissions yet. The form renders and validates like a real form, but
// submission is intentionally intercepted and redirected to a direct
// call/email prompt. Wire this up to Formspree, Netlify Forms, or a future
// API route when a backend is introduced.

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { company } from "@/lib/content/company";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-surface-100 bg-surface-50 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="font-display text-xl font-semibold text-navy">
          Thanks — we&apos;ll follow up shortly.
        </h3>
        <p className="max-w-sm text-sm text-ink-600">
          For a faster response right now, call{" "}
          <a href={company.phoneHref} className="font-semibold text-accent">
            {company.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={company.emailHref} className="font-semibold text-accent">
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-surface-100 bg-white p-6 shadow-sm shadow-navy/[0.03] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-ink-900"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-surface-100 bg-surface-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent focus:bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-ink-900"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="10-digit mobile number"
            className="mt-1.5 w-full rounded-lg border border-surface-100 bg-surface-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-ink-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="mt-1.5 w-full rounded-lg border border-surface-100 bg-surface-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent focus:bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold text-ink-900"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your hardware, networking, or AMC needs"
          className="mt-1.5 w-full resize-none rounded-lg border border-surface-100 bg-surface-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent focus:bg-white"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/30 transition-colors hover:bg-accent-dark"
      >
        Send Message
      </button>
    </form>
  );
}
