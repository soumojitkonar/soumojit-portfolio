"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="relative overflow-hidden" aria-label="Hero">
      <div className="bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Avatar / Photo */}
            <img
              src="/images/profile.jpg"
              alt="Profile photo"
              className="h-28 w-28 md:h-36 md:w-36 rounded-full ring-4 ring-white/20 shadow-lg object-cover"
            />

            <div className="max-w-2xl">
              <p className="text-white/80 text-sm md:text-base mb-1">Soumojit Konar</p>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
                Building AI-powered projects with code and curiosity
              </h1>
              <p className="text-white/80 mt-4 md:mt-5 text-pretty leading-relaxed">
                2nd-year CSE (AI/ML) student at MCKV Institute of Engineering. Passionate about DSA, web development,
                and applying ML to real-world problems.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#projects" aria-label="Jump to projects">
                <Button variant="secondary" className="bg-white text-gray-900 hover:bg-white/90">
                  View Projects
                </Button>
              </a>
              <a href="#skills" aria-label="Jump to skills">
                <Button variant="outline" className="border-white/70 text-white hover:bg-white/10 bg-transparent">
                  See Skills
                </Button>
              </a>
              <a href="#contact" aria-label="Jump to contact">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
