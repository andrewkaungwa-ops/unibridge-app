"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Users, MapPin, BookOpen, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Globe className="w-4 h-4" />
              For International Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Bridge to{" "}
              <span className="text-primary">University Success</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Navigate your academic journey with confidence. UniBridge provides personalized support for international freshers — from academic guidance to cultural adaptation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-sm font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2,500+ Students</p>
                <p className="text-sm text-muted-foreground">Already thriving</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-2xl border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Academic Guidance</h3>
                  <p className="text-sm text-muted-foreground">Personalized support for your studies</p>
                </div>
                <div className="p-6 bg-primary rounded-2xl text-primary-foreground">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Peer Mentorship</h3>
                  <p className="text-sm opacity-90">Connect with experienced students</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-accent/10 rounded-2xl border">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Campus Guide</h3>
                  <p className="text-sm text-muted-foreground">Navigate your new environment</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border shadow-sm">
                  <div className="w-12 h-12 bg-chart-4/20 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-chart-4" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Study Planner</h3>
                  <p className="text-sm text-muted-foreground">Smart tools for success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
