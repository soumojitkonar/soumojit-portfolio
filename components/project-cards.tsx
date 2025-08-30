import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  image?: string
  demo?: string
  github?: string
}

export default function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <div key={i} className="group">
          <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500/10">
            {p.image ? (
              <div className="aspect-video overflow-hidden rounded-t-xl">
                {p.href ? (
                  <a href={p.href} aria-label={`Open ${p.title}`}>
                    <img
                      src={p.image || "/placeholder.svg?height=360&width=640&query=project preview image"}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </a>
                ) : (
                  <img
                    src={p.image || "/placeholder.svg?height=360&width=640&query=project preview image"}
                    alt={`${p.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                )}
              </div>
            ) : null}
            <CardHeader>
              <CardTitle className="text-lg">
                {p.href ? (
                  <a href={p.href} className="hover:underline" aria-label={`Open ${p.title}`}>
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </CardTitle>
              <CardDescription className="text-pretty">{p.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-blue-200/70 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(p.demo || p.github) && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 border-0"
                      >
                        Demo
                      </Button>
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950/30 bg-transparent"
                      >
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
