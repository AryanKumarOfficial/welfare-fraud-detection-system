"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@welfareguard.gov",
    href: "mailto:contact@welfareguard.gov",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "1-800-123-4567",
    href: "tel:+18001234567",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Government Complex, Block A, New Delhi - 110001",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: "#",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]" />
      </div>

      <Container className="py-12 md:py-20">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Contact <span className="text-primary">Our Team</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions about welfare schemes or need assistance with fraud
            reporting? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact Info + Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl overflow-hidden border shadow-sm"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.732!2d77.209!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="bg-muted"
              />
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 md:p-8">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-chart-1/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24-48 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFormState("idle")}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">
                        Send us a Message
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we&apos;ll respond promptly
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your query in detail..."
                      required
                      className="flex w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
