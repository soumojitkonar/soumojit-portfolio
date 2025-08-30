"use client"

import { Mail, Phone, Github, Sparkles, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhyWorkWithMe() {
  const email = "soumojitkonar8@gmail.com"
  const phone = "+917980100930"
  const github = "https://github.com/soumojitkonar"

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Work With Me?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            Fresh perspective, collaborative mindset, and growing expertise in AI/ML and web development.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Fresh Perspective</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">
              I bring curiosity and innovative thinking to every project.
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-600 dark:text-purple-400">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Collaborative Spirit</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">
              I love learning from others and sharing knowledge.
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Growing Expertise</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">
              Constantly expanding my skills in AI/ML and web development.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-base">Email</CardTitle>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Best for project discussions</span>
            </CardHeader>
            <CardContent>
              <Link href={`mailto:${email}`} className="text-blue-600 hover:underline dark:text-blue-400">
                {email}
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2 text-purple-600 dark:text-purple-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-base">Phone</CardTitle>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Quick calls and urgent matters</span>
            </CardHeader>
            <CardContent>
              <Link href={`tel:${phone}`} className="text-purple-600 hover:underline dark:text-purple-400">
                {phone}
              </Link>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-base">GitHub</CardTitle>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Check out my latest code</span>
            </CardHeader>
            <CardContent>
              <Link
                href={github}
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                github.com/soumojitkonar
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-center text-slate-700 dark:text-slate-300 text-pretty">
            Tell me about your ideas, and let's explore how we can bring them to life!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
            >
              <Link
                href={`mailto:${email}?subject=Project%20Discussion&body=Hi%20Soumojit,%0D%0A%0D%0AI%27d%20love%20to%20discuss%20a%20project...`}
              >
                Start a Conversation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-500 dark:hover:bg-slate-900 bg-transparent"
            >
              <Link
                href={`mailto:${email}?subject=Let%27s%20Start%20Our%20Journey&body=Hi%20Soumojit,%0D%0A%0D%0ALet%27s%20start%20our%20journey...`}
              >
                Send Message & Start Our Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWorkWithMe
