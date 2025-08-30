"use client"

import { Card } from "@/components/ui/card"
import { Brain, Globe, Database, Code2 } from "lucide-react"

const skills = [
  {
    key: "langs",
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "C/C++", "JavaScript", "Java"],
  },
  {
    key: "ml",
    title: "AI & ML",
    icon: Brain,
    items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn"],
  },
  {
    key: "web",
    title: "Web Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "Responsive UI", "DOM Manipulation"],
  },
  {
    key: "cs",
    title: "CS Fundamentals",
    icon: Database,
    items: ["Data Structures", "Algorithms", "OOP", "Git & GitHub"],
  },
]

export default function SkillsGrid({ id = "skills", title = "Skills" }: { id?: string; title?: string }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-12">
      <h2 className="text-pretty text-center text-3xl font-semibold">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</span>
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skills.map(({ key, title: skillTitle, icon: Icon, items }) => (
          <Card key={key} className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <Icon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-foreground">{skillTitle}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
