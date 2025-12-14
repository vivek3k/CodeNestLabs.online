import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Send, User, Briefcase, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const projectSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  phone: z.string().max(20, "Phone too long").optional(),
  projectType: z.string().min(1, "Select a project type"),
  deadline: z.string().optional(),
  description: z.string().trim().min(10, "Description too short").max(2000, "Description too long"),
  referenceLink: z.string().url("Invalid URL").max(500).optional().or(z.literal("")),
});

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const projectTypes = [
  { value: "react", label: "React Application" },
  { value: "ml", label: "Machine Learning" },
  { value: "dl", label: "Deep Learning" },
  { value: "fullstack", label: "Full-Stack Development" },
  { value: "api", label: "API Development" },
  { value: "dashboard", label: "Dashboard Development" },
  { value: "automation", label: "Automation Tools" },
  { value: "other", label: "Other" },
];

const COOLDOWN_SECONDS = 10;

const RequestProject = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    deadline: "",
    description: "",
    referenceLink: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getProjectTypeLabel = (value: string) => {
    return projectTypes.find(t => t.value === value)?.label || value;
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
    const validation = projectSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0]?.message || "Invalid input";
      toast({ title: "Validation Error", description: firstError, variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    const sanitizedData = validation.data;
    const message = `🚀 NEW PROJECT REQUEST

👤 Name: ${sanitizedData.fullName}
📧 Email: ${sanitizedData.email}
📱 Phone: ${sanitizedData.phone || "Not provided"}
🛠 Project Type: ${getProjectTypeLabel(sanitizedData.projectType)}
⏳ Deadline: ${sanitizedData.deadline || "Not specified"}
🔗 Reference Link: ${sanitizedData.referenceLink || "Not provided"}
📝 Description: ${sanitizedData.description}`;

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
        toast({ title: "Request Submitted!", description: "We'll get back to you within 24-48 hours." });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setCooldown(COOLDOWN_SECONDS);
      toast({ title: "Submission Failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-2">Request Submitted!</h1>
            <p className="text-muted-foreground text-sm mb-6">
              We'll review your request and get back to you within 24-48 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setHoneypot("");
                setFormData({ fullName: "", email: "", phone: "", projectType: "", deadline: "", description: "", referenceLink: "" });
              }}
              variant="outline"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* Hero - Compact */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-primary mb-3">Start Your Project</span>
          <h1 className="section-title text-foreground mb-2">Request a Project</h1>
          <p className="section-subtitle mx-auto">
            Tell us about your requirements and we'll get back with a proposal.
          </p>
        </div>
      </section>

      {/* Form Section - Compact */}
      <section className="py-10 md:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
            {/* Personal Information */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-base font-semibold text-foreground">Personal Information</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="text-xs">Full Name *</Label>
                  <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" required maxLength={100} className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required maxLength={255} className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="phone" className="text-xs">Phone</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" maxLength={20} className="h-9 text-sm" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-base font-semibold text-foreground">Project Details</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="projectType" className="text-xs">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleSelectChange("projectType", value)} required>
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="deadline" className="text-xs">Deadline</Label>
                  <Input id="deadline" name="deadline" type="date" value={formData.deadline} onChange={handleInputChange} className="h-9 text-sm" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="description" className="text-xs">Description *</Label>
                  <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} placeholder="Describe your project..." rows={4} required maxLength={2000} className="text-sm resize-none" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="referenceLink" className="text-xs">Reference Link (Optional)</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="referenceLink" name="referenceLink" type="url" value={formData.referenceLink} onChange={handleInputChange} placeholder="Google Drive, Dropbox link" maxLength={500} className="h-9 pl-9 text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || cooldown > 0 || !formData.fullName || !formData.email || !formData.projectType || !formData.description}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : cooldown > 0 ? (
                <span>Wait {cooldown}s</span>
              ) : (
                <span className="flex items-center gap-2">
                  Submit Request <Send className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RequestProject;