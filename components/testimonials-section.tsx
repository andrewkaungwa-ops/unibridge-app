import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science, 2nd Year",
    country: "India",
    image: "P",
    quote:
      "UniBridge helped me navigate my first semester with confidence. The peer mentorship program connected me with seniors who truly understood my struggles.",
  },
  {
    name: "Chen Wei",
    role: "Business Administration, 1st Year",
    country: "China",
    image: "C",
    quote:
      "The study planner is amazing! I used to miss deadlines constantly, but now I&apos;m always on top of my assignments. My grades have improved significantly.",
  },
  {
    name: "Ahmed Hassan",
    role: "Engineering, 2nd Year",
    country: "Egypt",
    image: "A",
    quote:
      "Finding my way around campus was so stressful until I discovered the campus guide feature. Now I even help other new students find their way!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from international students who transformed their university experience with UniBridge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-card rounded-2xl border hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-chart-4 text-chart-4"
                  />
                ))}
              </div>

              <p className="text-foreground mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-lg font-semibold text-primary">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
