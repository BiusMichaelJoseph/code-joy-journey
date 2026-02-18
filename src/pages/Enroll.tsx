import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ExternalLink, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/9MNzmp5XiKDK3hmJA";

const Enroll = () => {
  return (
    <Layout>
      <SEO
        title="Enroll in Code Joy Academy"
        description="Start your enrollment with Code Joy Academy. Submit the quick form and our team will guide you to the right coding program."
        path="/enroll"
      />
      <section className="hero-shell py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Enroll Today</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ready to start your coding journey? Fill out our enrollment form and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="soft-card flex flex-col items-center justify-center border-0 p-8 text-center">
              <CardContent className="space-y-6 p-0">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <ExternalLink className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-extrabold">Student Enrollment Form</h2>
                <p className="text-muted-foreground">
                  Click the button below to open our enrollment form. It takes just 3–5 minutes to complete. We'll match you with the
                  right program and reach out shortly.
                </p>
                <Button size="lg" className="px-8 text-lg" asChild>
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Open Enrollment Form
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">No payment required — this form is for inquiries only.</p>
              </CardContent>
            </Card>

            <Card className="soft-card border-0">
              <CardContent className="space-y-6 p-8">
                <div>
                  <h2 className="text-2xl font-extrabold">Get in Touch</h2>
                  <p className="mt-2 text-muted-foreground">
                    Prefer to reach us directly? We're here to help with any questions about our programs.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Email</h4>
                      <p className="text-sm text-muted-foreground">info@codejoyacademy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Phone / WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">0743761460</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Location</h4>
                      <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">Response Time</h4>
                      <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="flex items-start gap-3 p-4">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Quick tip:</strong> WhatsApp is often the fastest way to reach us. Send us a
                      message and we'll respond promptly!
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold">Questions? We're Here to Help</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Not sure which program is right for your child? Book a free consultation and let our learning advisors guide you.
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

export default Enroll;
