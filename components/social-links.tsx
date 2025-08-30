import { Button } from "@/components/ui/button"

export default function SocialLinks({
  github,
  linkedin,
  email,
}: {
  github?: string
  linkedin?: string
  email?: string
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {github ? (
        <a href={github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
          <Button
            variant="outline"
            className="hover:-translate-y-0.5 transition bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/30 dark:border-blue-900 dark:text-blue-300 dark:hover:bg-blue-950/50"
          >
            GitHub
          </Button>
        </a>
      ) : null}
      {linkedin ? (
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
          <Button
            variant="outline"
            className="hover:-translate-y-0.5 transition bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 dark:bg-purple-950/30 dark:border-purple-900 dark:text-purple-300 dark:hover:bg-purple-950/50"
          >
            LinkedIn
          </Button>
        </a>
      ) : null}
      {email ? (
        <a href={email} aria-label="Send email">
          <Button className="hover:-translate-y-0.5 transition bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 border-0">
            Email
          </Button>
        </a>
      ) : null}
    </div>
  )
}
