import {
  GraduationCap,
  Calendar,
  Users,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Guidance",
    description:
      "Get personalized support to understand academic systems, course requirements, and study strategies tailored for international students.",
  },
  {
    icon: Calendar,
    title: "Smart Study Planner",
    description:
      "Manage assignments, deadlines, and exams with an intelligent planner that helps you stay on top of your academic workload.",
  },
  {
    icon: Users,
    title: "Peer Mentorship",
    description:
      "Connect with experienced students who understand your journey. Get matched with mentors from similar backgrounds.",
  },
  {
    icon: MapPin,
    title: "Campus Navigation",
    description:
      "Find your way around campus and the city. Discover essential services, facilities, and hidden gems near you.",
  },
  {
    icon: Globe,
    title: "Cultural Support",
    description:
      "Access resources to help you adapt to a new culture. Learn local customs, language tips, and connect with your community.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support Chat",
    description:
      "Have questions? Our AI-powered assistant and support team are available around the clock to help you succeed.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Thrive
          </h2>
          <p className="text-lg text-muted-foreground">
            UniBridge combines academic support, social connections, and practical tools into one seamless platform designed specifically for international freshers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
