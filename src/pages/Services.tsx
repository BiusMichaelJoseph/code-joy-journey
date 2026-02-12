import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Code2, Laptop, GraduationCap, Sparkles, UserCheck,
  Home, FileText, Heart, CheckCircle2,
} from "lucide-react";

const GOOGLE_FORM_URL = "#";

const programs = [
  {
    icon: Code2,
    title: "Junior Coders",
    ages: "Ages 7–10",
    desc: "Introduce your child to the world of coding through fun, interactive projects. Using visual programming tools, kids learn computational thinking, logic, and creativity.",
    topics: ["Scratch & Blockly", "Logic puzzles & games", "Animation & storytelling", "Basic problem solving"],
    format: "Online, In-Person, or Hybrid",
    includes: ["Completion certificate", "Project portfolio", "Community access"],
  },
  {
    icon: Laptop,
    title: "Teen Developers",
    ages: "Ages 11–17",
    desc: "Prepare teens for the digital future with real programming languages and industry tools. From building websites to creating games, students gain practical skills.",
    topics: ["Python programming", "HTML, CSS & JavaScript", "Game development (Unity/Roblox)", "Version control & collaboration"],
    format: "Online, In-Person, or Hybrid",
    includes: ["Completion certificate", "GitHub portfolio", "Mentorship access"],
  },
  {
    icon: GraduationCap,
    title: "Adult & Career Track",
    ages: "18+",
    desc: "Whether you're switching careers or upskilling, our adult programs provide comprehensive training in today's most in-demand tech skills.",
    topics: ["Full-stack web development", "Data Science fundamentals", "AI & Machine Learning intro", "Career preparation & portfolio building"],
    format: "Online or Hybrid",
    includes: ["Professional certificate", "Career coaching", "Alumni network access"],
  },
  {
    icon: Sparkles,
    title: "Holiday Bootcamps",
    ages: "All Ages",
    desc: "Intensive 1-week workshops during school holidays. Students dive deep into a specific topic and build a complete project by the end of the week.",
    topics: ["App development sprints", "Hackathon challenges", "Robotics & IoT", "Creative coding & digital art"],
    format: "In-Person or Online",
    includes: ["Project showcase", "Certificate of participation", "Swag & prizes"],
  },
  {
    icon: UserCheck,
    title: "1-on-1 Tutoring",
    ages: "All Ages",
    desc: "Personalized mentorship tailored to your specific goals. Whether it's school CS coursework, university projects, or personal learning goals.",
    topics: ["Custom curriculum", "Exam preparation", "University project support", "Competition training"],
    format: "Online",
    includes: ["Progress reports", "Flexible scheduling", "Dedicated mentor"],
  },
];

const additionalPrograms = [
  { icon: Home, title: "Homeschooling Support", desc: "Structured CS curriculum aligned with your homeschool schedule." },
  { icon: FileText, title: "Exam Preparation", desc: "Targeted prep for KCSE, IGCSE, A-Level, and AP Computer Science exams." },
  { icon: Heart, title: "Special Needs Support", desc: "Adaptive teaching methods for learners with diverse needs." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Programs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover the perfect coding program for every age, skill level, and learning style.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container space-y-16">
          {programs.map((p, idx) => (
            <div
              key={p.title}
              className={`flex flex-col gap-8 md:flex-row md:items-start ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{p.title}</h2>
                    <p className="text-sm font-medium text-primary">{p.ages}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{p.desc}</p>

                <div>
                  <h4 className="mb-2 font-heading font-bold">Topics Covered</h4>
                  <ul className="space-y-1">
                    {p.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="font-heading font-bold">Format: </span>
                    <span className="text-muted-foreground">{p.format}</span>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-heading font-bold">What's Included</h4>
                  <ul className="space-y-1">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild>
                  <Link to="/enroll">Enroll in {p.title}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-extrabold">Additional Programs</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {additionalPrograms.map((p) => (
              <Card key={p.title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <p.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link to="/enroll">Inquire Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold">Not Sure Which Program Is Right?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Book a free consultation and our learning advisors will help match you with the perfect program.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
