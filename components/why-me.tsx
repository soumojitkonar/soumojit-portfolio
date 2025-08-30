import type React from "react"
import { Sparkles, Users, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

function Feature({
  icon,
  title,
  desc,
  color = "blue",
}: {
  icon: React.ReactNode
  title: string
  desc: string
  color?: "blue" | "purple"
}) {
  const colorMap =
    color === "purple"
      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
      : "bg-blue-500/10 text-blue-600 dark:text-blue-400"

  return (
    <Card className="border-slate-200 dark:border-slate-800">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className={`rounded-lg p-2 ${colorMap}`}>{icon}</div>
        <CardTitle className="text-base md:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-600 dark:text-slate-300">{desc}</CardContent>
    </Card>
  )
}

export default function WhyMe() {
  return (
    <div className="mx-auto max-w-5xl">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Me
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
          A curious builder with a collaborative mindset and a growing track record in AI/ML and web development.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Feature
          icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
          title="Fresh Perspective"
          desc="I approach problems with curiosity and practical creativity to find clear, simple solutions."
          color="blue"
        />
        <Feature
          icon={<Users className="h-5 w-5" aria-hidden="true" />}
          title="Collaborative Spirit"
          desc="I learn fast from teams, communicate clearly, and share knowledge to move projects forward."
          color="purple"
        />
        <Feature
          icon={<Rocket className="h-5 w-5" aria-hidden="true" />}
          title="Growing Expertise"
          desc="Actively building skills across AI/ML, Python, and modern web—delivering measurable impact."
          color="blue"
        />
      </div>

      <div className="mt-10 text-center">
        <Link
          href="#contact"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
          aria-label="Jump to contact section"
        >
          Let’s work together
        </Link>
      </div>
    </div>
  )
}
