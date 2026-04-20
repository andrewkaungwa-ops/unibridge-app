import { AlertCircle, CheckCircle2 } from "lucide-react"

const challenges = [
  {
    problem: "Difficulty understanding academic systems",
    solution: "Step-by-step guides to university processes",
  },
  {
    problem: "Confusion using digital platforms",
    solution: "Integrated dashboard for all your needs",
  },
  {
    problem: "Cultural and language barriers",
    solution: "Cultural orientation and language support",
  },
  {
    problem: "Trouble managing assignments",
    solution: "Smart planner with reminders",
  },
  {
    problem: "Lack of social connections",
    solution: "Community matching and events",
  },
  {
    problem: "Limited campus knowledge",
    solution: "Interactive campus and city guide",
  },
]

export function ChallengesSection() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              We Understand Your Challenges
            </h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              International students often face unique obstacles when starting university in a new country. UniBridge was designed with these challenges in mind, turning every barrier into an opportunity for growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-background/5 rounded-2xl">
                <p className="text-4xl font-bold text-primary mb-2">78%</p>
                <p className="text-sm opacity-80">of students feel more confident after using UniBridge</p>
              </div>
              <div className="p-6 bg-background/5 rounded-2xl">
                <p className="text-4xl font-bold text-primary mb-2">92%</p>
                <p className="text-sm opacity-80">report improved academic performance</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {challenges.map((item) => (
              <div
                key={item.problem}
                className="flex items-start gap-4 p-4 bg-background/5 rounded-xl hover:bg-background/10 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="text-sm opacity-60 line-through mb-1">{item.problem}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
