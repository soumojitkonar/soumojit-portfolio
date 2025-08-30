"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, Globe, Brain, Sparkles } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  subtitle: string
  kind?: "Web App" | "Desktop App" | "Upcoming"
  headerLabel?: string
  description: string
  problems: string[]
  solutions: string[]
  impacts: string[]
  learning?: string
  tags: string[]
  demoHref?: string
  codeHref?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    id: "ml-mini-lab",
    title: "ML Mini-Lab",
    subtitle: "Hands-on Machine Learning Journey",
    headerLabel: "View Notebooks",
    kind: "Web App",
    description: "Personal notebooks covering classification, regression, and evaluation.",
    problems: ["ML concepts seemed abstract without practical implementation."],
    solutions: ["Built comprehensive notebooks for hands-on learning."],
    impacts: ["Gained practical ML skills and helped peers understand complex concepts."],
    learning: "ML fundamentals, data preprocessing, and model evaluation",
    tags: ["Python", "Jupyter", "scikit-learn"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    headerLabel: "Personal Showcase",
    kind: "Web App",
    description: "Personal portfolio showcasing skills, projects, and achievements.",
    problems: ["Needed a clean, modern home for my work."],
    solutions: ["Built a responsive site with clear project storytelling."],
    impacts: ["Improved presentation and shareability of my work."],
    learning: "Responsive design, modern CSS, and UX principles",
    tags: ["HTML", "CSS", "JavaScript"],
    demoHref: "/portfolio",
    codeHref: "#",
  },
  {
    id: "algo-visualizer",
    title: "Algo Visualizer",
    subtitle: "Interactive Algorithm Learning Tool",
    headerLabel: "Watch Demo",
    kind: "Web App",
    description: "Visualize algorithm steps in real-time to aid understanding.",
    problems: ["Students struggle to understand how sorting algorithms work behind the scenes."],
    solutions: ["Interactive visuals that animate each algorithm step."],
    impacts: ["Helped classmates better understand DSA concepts through visuals."],
    learning: "DOM manipulation, algorithm optimization, user-centered design",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "study-planner",
    title: "Study Planner",
    subtitle: "Smart Learning Management System",
    headerLabel: "View Screenshots",
    kind: "Desktop App",
    description: "A Python app with SQLite to schedule and track study sessions.",
    problems: ["Difficulty tracking progress and implementing spaced repetition."],
    solutions: ["Task management with reminders and progress tracking."],
    impacts: ["Improved exam scores by 15% via better organization."],
    learning: "Database design, GUI dev, productivity algorithms",
    tags: ["Python", "SQLite", "Tkinter"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "ai-student-chatbot",
    title: "AI Student Chatbot",
    subtitle: "Upcoming Project",
    headerLabel: "AI Assistant",
    kind: "Upcoming",
    description: "AI-powered chatbot for student Q&A and academic help.",
    problems: ["Quick, context-aware study assistance is hard to find."],
    solutions: ["Plan to integrate embeddings and retrieval to answer curriculum questions."],
    impacts: ["Target: reduce study friction and accelerate answers."],
    learning: "NLP, conversational AI, API integration",
    tags: ["Python", "AI/ML", "NLP"],
    comingSoon: true,
  },
]

function ProjectHeader({ label, kind }: { label?: string; kind?: Project["kind"] }) {
  return (
    <div
      className={cn(
        "rounded-t-xl p-6 text-center text-white",
        // Subtle blue → purple header gradient
        "bg-gradient-to-r from-blue-500 to-purple-500",
      )}
      aria-hidden="true"
    >
      <div className="mx-auto flex items-center justify-center gap-2 text-sm font-medium opacity-95">
        <Play className="h-5 w-5" />
        <span>{label || "Preview"}</span>
      </div>
      {kind && (
        <div className="pointer-events-none absolute right-4 top-4 select-none rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
          {kind}
        </div>
      )}
    </div>
  )
}

function ProjectBody({ p }: { p: Project }) {
  return (
    <div className="space-y-3 p-6">
      <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
      <p className="text-sm text-muted-foreground">{p.subtitle}</p>

      <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
        {p.problems?.map((t, i) => (
          <li key={"pr-" + i}>
            <span className="mr-2">🎯</span>
            {t}
          </li>
        ))}
        {p.solutions?.map((t, i) => (
          <li key={"so-" + i}>
            <span className="mr-2">💡</span>
            {t}
          </li>
        ))}
        {p.impacts?.map((t, i) => (
          <li key={"im-" + i}>
            <span className="mr-2">🚀</span>
            {t}
          </li>
        ))}
      </ul>

      {p.learning && <p className="pt-1 text-sm italic text-blue-600">Key Learning: {p.learning}</p>}

      <div className="flex flex-wrap gap-2 pt-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-3">
        {p.comingSoon ? (
          <Button variant="outline" className="w-full bg-transparent" disabled>
            <Sparkles className="mr-2 h-4 w-4" />
            Coming Soon
          </Button>
        ) : (
          <>
            {p.demoHref && (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                <Link href={p.demoHref} aria-label={`Open demo for ${p.title}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {p.codeHref && (
              <Button asChild variant="outline">
                <Link href={p.codeHref} aria-label={`Open code for ${p.title}`}>
                  <Globe className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function GradientProjects({ id = "projects", title = "Projects" }: { id?: string; title?: string }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-12">
      <header className="mb-6">
        <h2 className="text-pretty text-center text-3xl font-semibold">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</span>
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((p) => (
          <Card key={p.id} className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
            <ProjectHeader label={p.headerLabel} kind={p.kind} />
            <ProjectBody p={p} />
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="relative">
            <div className="rounded-t-xl bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-center text-white">
              <div className="mx-auto flex items-center justify-center gap-2 text-sm font-medium opacity-95">
                <Brain className="h-5 w-5" />
                <span>AI Assistant</span>
              </div>
              <div className="pointer-events-none absolute right-4 top-4 select-none rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
                Coming Soon
              </div>
            </div>
          </div>
          <ProjectBody p={projects.find((x) => x.id === "ai-student-chatbot")!} />
        </Card>
      </div>
    </section>
  )
}
