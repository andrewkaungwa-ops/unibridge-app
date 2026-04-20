import { UserPlus, Target, Sparkles, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description:
      "Sign up and tell us about yourself — your course, interests, and what support you need.",
  },
  {
    icon: Target,
    step: "02",
    title: "Get Personalized Plan",
    description:
      "Receive a customized roadmap based on your academic goals and transition needs.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Connect & Learn",
    description:
      "Access resources, connect with mentors, and join communities that match your interests.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Thrive at University",
    description:
      "Track your progress, celebrate milestones, and build confidence in your new environment.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with UniBridge is simple. Follow these four steps to transform your university experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
