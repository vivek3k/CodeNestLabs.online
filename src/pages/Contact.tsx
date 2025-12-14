import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, ExternalLink, Users, HelpCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().trim().min(10, "Message too short").max(1000, "Message too long"),
});

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const COOLDOWN_SECONDS = 10;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      toast({ title: "Submission blocked", description: "Spam detected.", variant: "destructive" });
      return;
    }

    // Cooldown check
    if (cooldown > 0) {
      toast({ title: "Please wait", description: `Try again in ${cooldown} seconds.`, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    // Validate input with zod
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0]?.message || "Invalid input";
      toast({ title: "Validation Error", description: firstError, variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    const sanitizedData = validation.data;
    const message = `📩 NEW CONTACT MESSAGE

👤 Name: ${sanitizedData.name}
📧 Email: ${sanitizedData.email}
📌 Subject: ${sanitizedData.subject}
📝 Message: ${sanitizedData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setCooldown(COOLDOWN_SECONDS);
        toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setCooldown(COOLDOWN_SECONDS);
      toast({ title: "Failed to Send", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-3">Get in Touch</span>
          <h1 className="section-title text-foreground mb-2">Contact Us</h1>
          <p className="section-subtitle mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Let's Connect</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Choose your preferred way to reach us.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">Email</h3>
                    <a href="mailto:vivekrajanala46@gmail.com" className="text-primary hover:underline text-xs break-all">
                      vivekrajanala46@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">Location</h3>
                    <p className="text-muted-foreground text-xs">Remote • Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Telegram */}
              <div className="mt-4 p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Send className="w-4 h-4 text-primary" />
                  <h3 className="font-medium text-foreground text-sm">Telegram</h3>
                </div>
                
                <div className="space-y-2">
                  <a href="https://t.me/CodeNestLabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded bg-muted/50 hover:bg-muted text-xs group">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span className="flex-1 text-foreground">@CodeNestLabs</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </a>
                  <a href="https://t.me/CodeNestLabs_user_help" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded bg-muted/50 hover:bg-muted text-xs group">
                    <HelpCircle className="w-3.5 h-3.5 text-primary" />
                    <span className="flex-1 text-foreground">@CODENESTLABS_HELP</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <Button asChild className="w-full mt-4" size="default">
                <a href="https://t.me/CodeNestLabs" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4" /> Chat on Telegram
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-5 border border-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground text-sm mb-4">We'll get back to you soon.</p>
                  <Button onClick={() => { setIsSubmitted(false); setHoneypot(""); setFormData({ name: "", email: "", subject: "", message: "" }); }} variant="outline" size="sm">
                    Send Another
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-base font-semibold text-foreground mb-4">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot - hidden from users, bots will fill it */}
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="absolute -left-[9999px] opacity-0 pointer-events-none"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs">Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required maxLength={100} className="h-9 text-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs">Email *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required maxLength={255} className="h-9 text-sm" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs">Subject *</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can we help?" required maxLength={200} className="h-9 text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs">Message *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows={4} required maxLength={1000} className="text-sm resize-none" />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting || cooldown > 0 || !formData.name || !formData.email || !formData.subject || !formData.message}>
                      {isSubmitting ? "Sending..." : cooldown > 0 ? `Wait ${cooldown}s` : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;