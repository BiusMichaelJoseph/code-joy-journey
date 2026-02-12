import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Heart, Target, Shield, Users, Lightbulb, Award } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Project-First Learning", desc: "Every student builds real projects from the very first class — no passive lectures." },
  { icon: Heart, title: "Low Stress, High Support", desc: "We create a nurturing environment where mistakes are celebrated as learning moments." },
  { icon: Shield, title: "Safe & Inclusive", desc: "Every learner is welcome regardless of background, ability, or experience level." },
  { icon: Target, title: "Career-Relevant Skills", desc: "Our curriculum is designed around real-world industry demands and practical application." },
];

const team = [
  { name: "Instructor Name", role: "Lead Coding Instructor", bio: "10+ years in software development. Passionate about making coding accessible." },
  { name: "Instructor Name", role: "Youth Programs Lead", bio: "Former school teacher with a background in child education and game development." },
  { name: "Instructor Name", role: "Data Science Mentor", bio: "Data scientist with experience at top tech companies. Loves teaching." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">About Code Joy Academy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Making coding joyful, accessible, and career-relevant for all ages.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Code Joy Academy was founded with a simple belief: everyone deserves the chance to learn coding in a way that's fun, supportive, and meaningful. We bridge the gap between curiosity and capability, helping students of all ages discover the power and joy of building with code.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's a 7-year-old creating their first animation or an adult professional pivoting into tech, we meet learners where they are and guide them with patience, expertise, and genuine care.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-extrabold">Our Teaching Philosophy</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="h-full text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-extrabold">Meet Our Instructors</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((t, i) => (
              <Card key={i} className="h-full text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-bold">{t.name}</h3>
                  <p className="text-sm font-medium text-primary">{t.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container text-center">
          <Award className="mx-auto mb-4 h-12 w-12 opacity-80" />
          <h2 className="text-3xl font-extrabold">Diversity & Inclusion</h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            We are committed to creating a learning environment where every student feels seen, heard, and valued. Regardless of gender, ethnicity, socioeconomic background, or learning differences — Code Joy Academy is a space for everyone.
          </p>
          <Button size="lg" variant="outline" className="mt-8 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
            <Link to="/enroll">Join Our Community</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
