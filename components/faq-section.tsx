"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is UniBridge designed for?",
    answer:
      "UniBridge is specifically designed for international freshers starting university in a new country. Whether you&apos;re navigating a different academic system, adapting to a new culture, or simply looking for support during your first year, UniBridge is here to help.",
  },
  {
    question: "How does the peer mentorship matching work?",
    answer:
      "Our intelligent matching system considers your course, country of origin, language preferences, and personal interests to connect you with mentors who can best understand and support your journey. You can also browse and request mentors manually.",
  },
  {
    question: "Is UniBridge free to use?",
    answer:
      "UniBridge offers a free tier that includes essential features like the campus guide, basic study planner, and community access. Premium features including advanced mentorship matching, priority support, and additional resources are available through our student plan.",
  },
  {
    question: "Can I use UniBridge if I&apos;m not in my first year?",
    answer:
      "Absolutely! While UniBridge is optimized for freshers, students at any stage of their university journey can benefit from our features. Many second and third-year students use our platform to become mentors and give back to the community.",
  },
  {
    question: "How does the study planner integrate with my university&apos;s systems?",
    answer:
      "UniBridge can sync with most Learning Management Systems (LMS) to automatically import your deadlines and course schedules. You can also manually add assignments and set custom reminders to stay organized.",
  },
  {
    question: "What languages does UniBridge support?",
    answer:
      "UniBridge currently supports English, Mandarin, Hindi, Spanish, and Arabic, with more languages being added regularly. Our cultural support resources are available in even more languages to help you adapt to your new environment.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our support team.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
