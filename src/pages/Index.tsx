import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Lightbulb,
  Award,
  Users,
  Code2,
  Laptop,
  GraduationCap,
  Sparkles,
  UserCheck,
  ClipboardList,
  BookOpen,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/9MNzmp5XiKDK3hmJA";

const benefits = [
  { icon: Lightbulb, title: "Project-Based Learning", desc: "Students build real projects from day one" },
  { icon: Award, title: "Certified Instructors", desc: "Learn from industry professionals" },
  { icon: Users, title: "All Ages Welcome", desc: "Programs for ages 7 to adult" },
];

const courses = [
  { icon: BookOpen, title: "Homeschooling Support", ages: "Ages 5–18", desc: "CBC & Cambridge-aligned coding curriculum for homeschoolers", color: "bg-secondary/10 text-secondary" },
  { icon: Code2, title: "Junior Coders", ages: "Ages 7–10", desc: "Scratch, Blockly & logic games", color: "bg-primary/10 text-primary" },
  { icon: Laptop, title: "Teen Developers", ages: "Ages 11–17", desc: "Python, Web Dev & Cambridge CS", color: "bg-accent/15 text-accent-foreground" },
  { icon: GraduationCap, title: "Adult & Career Track", ages: "18+", desc: "Full-stack, Data Science & AI", color: "bg-primary/10 text-primary" },
  { icon: Sparkles, title: "Holiday Bootcamps", ages: "All Ages", desc: "Intensive 1-week workshops", color: "bg-secondary/10 text-secondary" },
  { icon: UserCheck, title: "1-on-1 Tutoring", ages: "All Ages", desc: "Personalized mentorship", color: "bg-accent/15 text-accent-foreground" },
];

const steps = [
  { num: "1", icon: ClipboardList, title: "Inquire", desc: "Fill out our quick enrollment form" },
  { num: "2", icon: BookOpen, title: "Get Matched", desc: "We find the perfect program for you" },
  { num: "3", icon: Sparkles, title: "Start Learning", desc: "Begin your coding journey!" },
];

const testimonials = [
  { name: "Sarah M.", role: "Parent", quote: "My son went from zero coding knowledge to building his own games in just 3 months. The instructors are fantastic!" },
  { name: "James K.", role: "Teen Student", quote: "I love the project-based approach. I actually built a website for my school club!" },
  { name: "Grace N.", role: "Adult Learner", quote: "The career track bootcamp helped me transition into tech. Best investment I ever made." },
];

const Index = () => {
  return (
    <Layout>
      <section className="hero-shell py-20 md:py-28">
        <div className="container text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Code Joy Academy • Learn by Building
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Unlock the Joy of Coding — <span className="text-primary">From First Line to First Job</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Hands-on coding classes for kids, teens, and adults. Project-based learning, real-world skills, and a supportive community.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/enroll">Enroll Your Child</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/50 py-12">
        <div className="container grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="soft-card p-5">
              <div className="flex items-start gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Find the perfect coding journey for every age and skill level.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <Link to="/services" key={c.title}>
                <Card className="soft-card group h-full border-0">
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${c.color}`}>
                      <c.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{c.title}</h3>
                    <p className="text-sm font-medium text-primary">{c.ages}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-muted/50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Hear from our students and parents.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="soft-card h-full border-0">
                <CardContent className="p-6">
                  <Quote className="mb-3 h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground">{t.quote}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-2 font-heading font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Getting started is easy — just 3 simple steps.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <Card key={s.num} className="soft-card border-0 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-foreground">
                    {s.num}
                  </div>
                  <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Start Your Coding Journey?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Join hundreds of students already learning with Code Joy Academy. Enroll today and get matched with the perfect program.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link to="/enroll">Enroll Your Child Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
