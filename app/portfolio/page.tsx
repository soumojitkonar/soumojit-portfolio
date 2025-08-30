import HeroGradient from "@/components/hero-gradient"
import ProjectCards from "@/components/project-cards"
import { SkillsPie } from "@/components/charts/skills-pie"
import { ProjectTypesBar } from "@/components/charts/project-types-bar"
import BackToTop from "@/components/back-to-top"
import SocialLinks from "@/components/social-links"
import PersonalInfo from "@/components/personal-info"
import WhyWorkWithMe from "@/components/why-work-with-me"
import WhyMe from "@/components/why-me"
import GradientProjects from "@/components/sections/gradient-projects"
import SkillsGrid from "@/components/sections/skills-grid"

export default function PortfolioPage() {
  return (
    <main className="scroll-smooth">
      {/* Gradient Hero with profile avatar */}
      <HeroGradient />
      {/* Sticky in-page nav with colorful pills to jump to sections */}
      <nav
        aria-label="Section navigation"
        className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70"
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-2 py-3">
            <li>
              <a
                href="#about"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
                aria-label="Go to About"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600/90 hover:opacity-90 transition"
                aria-label="Go to Why Me"
              >
                Why Me
              </a>
            </li>
            <li>
              <a
                href="#why-work-with-me"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600/90 hover:opacity-90 transition"
                aria-label="Go to Why Work With Me"
              >
                Why Work With Me
              </a>
            </li>
            {/* ... existing code for Projects/Skills/Contact pills ... */}
            <li>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition dark:text-blue-300 dark:bg-blue-950/30 dark:border-blue-900"
                aria-label="Go to Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills-insights"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition dark:text-purple-300 dark:bg-purple-950/30 dark:border-purple-900"
                aria-label="Go to Skills & Insights"
              >
                Skills & Insights
              </a>
            </li>
            <li className="ml-auto">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-foreground hover:underline"
                aria-label="Go to Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Personal Information */}
      <section id="about" aria-label="About me" className="container mx-auto px-4 py-10 md:py-14">
        <PersonalInfo />
      </section>
      {/* Social profiles */}
      <section aria-label="Social profiles" className="container mx-auto px-4 py-8 md:py-10">
        <SocialLinks
          github="https://github.com/soumojitkonar"
          linkedin="https://www.linkedin.com/in/your-link-here"
          email="mailto:soumojitkonar8@gmail.com"
        />
      </section>

      {/* Why Me section */}
      <section id="why" aria-label="Why Me" className="container mx-auto px-4 py-10 md:py-14">
        <WhyMe />
      </section>

      {/* Why Work With Me section */}
      <section id="why-work-with-me" aria-label="Why work with me" className="container mx-auto px-4 py-10 md:py-14">
        <WhyWorkWithMe />
      </section>

      {/* Gradient Projects section */}
      <GradientProjects id="projects" title="Projects" />

      {/* More Projects section */}
      <section id="more-projects" aria-label="More Projects" className="container mx-auto px-4 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          More Projects
        </h2>
        <ProjectCards
          projects={[
            {
              title: "Algo Visualizer",
              description: "Interactive animations for sorting & pathfinding.",
              tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
              href: "#",
              image: "/algorithm-visualization-ui.png",
              demo: "#",
              github: "#",
            },
            {
              title: "Study Planner",
              description: "Track study sessions with smart spaced repetition.",
              tags: ["Python", "SQLite", "CLI/GUI"],
              href: "#",
              image: "/study-planner-dashboard.png",
              demo: "#",
              github: "#",
            },
            {
              title: "ML Mini-Lab",
              description: "Hands-on notebooks for ML classification & regression.",
              tags: ["Python", "NumPy", "Pandas", "scikit-learn"],
              href: "#",
              image: "/machine-learning-notebooks.png",
              demo: "#",
              github: "#",
            },
            {
              title: "Portfolio Website",
              description: "Personal showcase of my skills & achievements.",
              tags: ["HTML", "CSS", "JS", "Responsive"],
              href: "#",
              image: "/developer-portfolio-screenshot.png",
              demo: "#",
              github: "#",
            },
            {
              title: "AI Chatbot (Upcoming)",
              description: "Student-friendly AI Q&A bot (in progress).",
              tags: ["AI/ML", "Python", "Prototype"],
              href: "#",
              image: "/student-ai-chatbot.png",
              demo: "#",
              github: "#",
            },
          ]}
        />
      </section>

      {/* Skills Grid section */}
      <SkillsGrid id="skills" title="Skills" />

      {/* Skills & Insights section */}
      <section id="skills-insights" aria-label="Skills and charts" className="container mx-auto px-4 py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 md:p-6">
            <h3 className="text-lg font-medium mb-4">Skills Distribution</h3>
            <SkillsPie
              data={[
                { name: "Python", value: 40 },
                { name: "C/C++", value: 25 },
                { name: "JavaScript", value: 20 },
                { name: "Java", value: 15 },
              ]}
            />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 md:p-6">
            <h3 className="text-lg font-medium mb-4">Project Types</h3>
            <ProjectTypesBar
              data={[
                { type: "Web Dev", count: 3 },
                { type: "AI/ML Mini", count: 2 },
                { type: "Academic", count: 2 },
                { type: "Hackathon", count: 1 },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Contact" className="container mx-auto px-4 py-10 md:py-16">
        {/* Gradient heading for consistency */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-muted-foreground mb-6 max-w-prose">
          How can we collaborate? Let’s chat about AI/ML ideas, internships, or building impactful projects.
        </p>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 md:p-8">
          <ul className="space-y-3">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a className="text-primary hover:underline" href="mailto:soumojitkonar8@gmail.com">
                soumojitkonar8@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                className="text-primary hover:underline"
                href="https://github.com/soumojitkonar"
                target="_blank"
                rel="noreferrer"
              >
                github.com/soumojitkonar
              </a>
            </li>
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.linkedin.com/in/your-link-here"
                target="_blank"
                rel="noreferrer"
              >
                Add your link
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span> <span>+91 7980100930</span>
            </li>
          </ul>
        </div>
      </section>

      <BackToTop />
    </main>
  )
}
