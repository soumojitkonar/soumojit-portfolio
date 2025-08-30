import {
  Code,
  BookOpen,
  Bot,
  Laptop2,
  Brain,
  CalendarCheck,
  Users,
  Trophy,
  GraduationCap,
  BookIcon,
  PenSquare,
  Music2,
  Gamepad2,
  CheckCircle2,
  Circle,
} from "lucide-react"

export default function PersonalInfo() {
  const skillBars = [
    { label: "Python", value: 85 },
    { label: "HTML/CSS", value: 80 },
    { label: "C/C++", value: 75 },
    { label: "JavaScript", value: 70 },
  ]

  return (
    <div className="space-y-10">
      {/* Intro and Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
            I’m Soumojit Konar, a 2nd-year B.Tech student in Computer Science & Engineering (AI & ML) at MCKV Institute
            of Engineering. I’m passionate about coding, problem‑solving, and applying AI/ML concepts to real‑world
            challenges. I believe in learning by building—experimenting with algorithms, making small projects, and
            contributing to open-source.
          </p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-5">
          <h3 className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-300">Quick Info</h3>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="min-w-24 text-muted-foreground">Name</dt>
              <dd className="font-medium">Soumojit Konar</dd>
            </div>
            <div className="flex gap-2">
              <dt className="min-w-24 text-muted-foreground">Status</dt>
              <dd className="font-medium">2nd-year B.Tech, CSE (AI & ML)</dd>
            </div>
            <div className="flex gap-2">
              <dt className="min-w-24 text-muted-foreground">Institution</dt>
              <dd className="font-medium">MCKV Institute of Engineering</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Projects */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">{"Project Highlights"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <div className="rounded-md p-2 bg-blue-600/10 text-blue-700 dark:text-blue-300">
              <Code className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-medium">Algo Visualizer</p>
              <p className="text-sm text-muted-foreground">Interactive animations for sorting & pathfinding.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <div className="rounded-md p-2 bg-blue-600/10 text-blue-700 dark:text-blue-300">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-medium">Study Planner</p>
              <p className="text-sm text-muted-foreground">Track study sessions with spaced repetition.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <div className="rounded-md p-2 bg-blue-600/10 text-blue-700 dark:text-blue-300">
              <Brain className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-medium">ML Mini‑Lab</p>
              <p className="text-sm text-muted-foreground">Hands-on notebooks for ML basics.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <div className="rounded-md p-2 bg-blue-600/10 text-blue-700 dark:text-blue-300">
              <Laptop2 className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-medium">Portfolio Website</p>
              <p className="text-sm text-muted-foreground">Personal showcase of skills & achievements.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-4 md:col-span-2">
            <div className="rounded-md p-2 bg-blue-600/10 text-blue-700 dark:text-blue-300">
              <Bot className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="font-medium">AI Chatbot (Upcoming)</p>
              <p className="text-sm text-muted-foreground">Student-friendly AI Q&A bot (in progress).</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          See more below in Featured Projects for demos and code links.
        </p>
      </div>

      {/* Experience */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Experience</h3>
        <ol className="relative border-l-2 border-blue-200 dark:border-blue-900 pl-6">
          <li className="mb-5">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarCheck className="h-4 w-4 text-blue-600" aria-hidden /> 2024 – Present
            </div>
            <p className="font-medium mt-1">Student Developer</p>
            <p className="text-sm text-muted-foreground">Practiced DSA, built full‑stack mini‑projects.</p>
          </li>
          <li className="mb-5">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-blue-600" aria-hidden /> 2025 – Present
            </div>
            <p className="font-medium mt-1">Open Source Explorer</p>
            <p className="text-sm text-muted-foreground">Contributing to beginner‑friendly repos & docs.</p>
          </li>
          <li>
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-blue-600" aria-hidden /> Hackathons
            </div>
            <p className="font-medium mt-1">Team Collaborations</p>
            <p className="text-sm text-muted-foreground">Built real‑time mini‑apps under pressure.</p>
          </li>
        </ol>
      </div>

      {/* Achievements */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Achievements</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <Trophy className="h-4 w-4" aria-hidden /> Hackathon participant
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <GraduationCap className="h-4 w-4" aria-hidden /> Certifications: Python, DSA, ML
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <BookIcon className="h-4 w-4" aria-hidden /> Strong CS foundation
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            <Users className="h-4 w-4" aria-hidden /> Coding club activities
          </span>
        </div>
      </div>

      {/* Skills */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {skillBars.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">{s.label}</span>
                  <span className="text-muted-foreground">{s.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                    style={{ width: `${s.value}%` }}
                    aria-label={`${s.label} proficiency ${s.value}%`}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Grouped stacks */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Languages</p>
              <p className="text-sm text-muted-foreground">Python, C/C++, JavaScript, Java (basic)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Web</p>
              <p className="text-sm text-muted-foreground">HTML5, CSS3, Responsive UI, DOM Manipulation</p>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">AI/ML</p>
              <p className="text-sm text-muted-foreground">NumPy, Pandas, Matplotlib, scikit-learn</p>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Core CS</p>
              <p className="text-sm text-muted-foreground">Data Structures, Algorithms, OOP, Git & GitHub</p>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Soft Skills</p>
              <p className="text-sm text-muted-foreground">Problem-solving, Teamwork, Communication, Time Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/30">
            <img src="/coursera-logo.png" alt="Coursera logo" className="h-8 w-8 rounded" />
            <div>
              <p className="font-medium text-sm">Python Programming</p>
              <p className="text-xs text-muted-foreground">Platform / Year</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/30">
            <img src="/dsa-course-logo.png" alt="DSA platform logo" className="h-8 w-8 rounded" />
            <div>
              <p className="font-medium text-sm">Data Structures & Algorithms</p>
              <p className="text-xs text-muted-foreground">Platform / Year</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50/60 p-4 dark:border-blue-900 dark:bg-blue-950/30">
            <img src="/machine-learning-logo.png" alt="Machine Learning platform logo" className="h-8 w-8 rounded" />
            <div>
              <p className="font-medium text-sm">Machine Learning Fundamentals</p>
              <p className="text-xs text-muted-foreground">Platform / Year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Hobbies & Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-600" aria-hidden /> <span>Reading about AI & emerging tech</span>
          </div>
          <div className="flex items-center gap-3">
            <Code className="h-5 w-5 text-blue-600" aria-hidden /> <span>Debugging & helping peers</span>
          </div>
          <div className="flex items-center gap-3">
            <PenSquare className="h-5 w-5 text-blue-600" aria-hidden /> <span>Writing blog-style notes</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-blue-600" aria-hidden /> <span>Exploring open-source communities</span>
          </div>
          <div className="flex items-center gap-3">
            <Music2 className="h-5 w-5 text-blue-600" aria-hidden /> <span>Music</span>
          </div>
          <div className="flex items-center gap-3">
            <Gamepad2 className="h-5 w-5 text-blue-600" aria-hidden /> <span>Gaming</span>
          </div>
        </div>
      </div>

      {/* Future Goals */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Future Goals</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-600" aria-hidden />
            <span>Secure internships in AI/ML or software development</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-600" aria-hidden />
            <span>Contribute meaningfully to open-source communities</span>
          </li>
          <li className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-muted-foreground" aria-hidden />
            <span>Publish research projects</span>
          </li>
          <li className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-muted-foreground" aria-hidden />
            <span>Build a strong LinkedIn & GitHub presence</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
