"use client"

import Link from "next/link"

export default function HeroGradient() {
  return (
    <header className="relative isolate" aria-label="Intro section">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/images/profile.jpg"
              alt="Profile photo"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full ring-4 ring-white/80 shadow-lg object-cover"
            />
            <div className="space-y-2">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Building AI/ML projects and thoughtful web experiences
              </h1>
              <p className="mx-auto max-w-2xl text-white/90">
                I explore machine learning, data-driven apps, and modern UI patterns. Scroll to see projects, skills,
                and how we can work together.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 ring-1 ring-white/30 hover:bg-white/15 transition"
                aria-label="Jump to Projects"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 transition"
                aria-label="Jump to Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
