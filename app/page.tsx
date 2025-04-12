"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  FileText,
  Sparkles,
  Zap,
 

} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function Home() {
  const router = useRouter();
   const [mounted, setMounted] = useState(false);

  // Set mounted to true on client side
  useEffect(() => {
    setMounted(true);
  }, []);



  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between  md:px-6">
          <div className="flex items-center ">
            <Image src="/logo.png" alt="Logo" width={170} height={100} />
          </div>
          <Link
            href="https://github.com/MekdelawitGebre/ContentorAI-Content_Generator"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
              alt="GitHub"
              className="h-6 w-6"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center gap-6 text-center max-w-[85rem] mx-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Generate Content with
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> Contentor
                AI
              </span>
            </h1>
            <div className="h-16 md:h-20 overflow-hidden">
              <TypewriterEffect
                words={[
                  { text: "Blog Post" },
                  { text: "Instagram Post" },
                  { text: "X Tweets" },
                  { text: "Youtube Description" },
                  { text: "Linkedin Post" },
                ]}
              />
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create high-quality, engaging content in seconds.ContentorAI
              understands your brand voice and delivers content that resonates
              with your audience.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Button
                size="lg"
                className="h-12 px-6 text-white cursor-pointer"
                onClick={() => router.push("/dashboard")}
              >
                Start Creating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                Watch Demo
              </Button>
            </div>
            <div className="w-full max-w-4xl mt-8">
              <HeroAnimation />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 md:py-24 lg:py-32 bg-muted/30"
        id="features"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-[85rem] mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Create Awesome Content
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our AI-powered platform offers a comprehensive suite of tools to
                help you create, optimize, and distribute content that drives
                results.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl pt-8">
              <FeatureCard
                icon={<Bot className="h-10 w-10 text-primary" />}
                title="AI-Powered Writing"
                description="Generate high-quality content with our advanced AI that understands context and tone."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Multiple Content Types"
                description="Create blog posts, social media updates, product descriptions and more."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Lightning Fast"
                description="Generate content in seconds, not hours. Save time and focus on what matters."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm ">© 2025 ContentorAI.Built by Hanix.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/MekdelawitGebre/ContentorAI-Content_Generator"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                  alt="GitHub"
                  className="h-5 w-5"
                />
              </Link>

              <Link
                href="https://x.com/Hanix421"
                target="_blank"
                className="flex items-center gap-1"
              >
                <span className="text-xl font-bold">𝕏</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/mekdelawit-gebre-a4b037236/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// TypewriterEffect Component
function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex].text;
    const typingSpeed = isDeleting ? 50 : 50; // Faster when deleting

    if (!isDeleting && currentText === word) {
      // Wait before starting to delete
      const pauseTime = 1500;
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === "") {
      // Move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return word.slice(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div
      className={cn("flex items-center justify-center text-center", className)}
    >
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
        <span>Create </span>
        <span className={cn("text-primary", words[currentWordIndex].className)}>
          {currentText}
        </span>
        <span className={cn("animate-blink", cursorClassName)}>|</span>
      </h1>
    </div>
  );
}


function HeroAnimation() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStep((prev) => (prev + 1) % 3);
        setVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-lg border bg-background p-2 shadow-md">
      <div className="absolute top-0 left-0 right-0 h-12 bg-muted/50 rounded-t-lg flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
          ContentorAI
        </div>
      </div>
      <div className="pt-12 pb-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Prompt</div>
              <div className="rounded-md border bg-muted/50 p-4">
                {step === 0 &&
                  "Write a blog post about the top 5 emerging programming languages in 2025."}
                {step === 1 &&
                  "Create a product description for a next-gen AI-powered code assistant."}
                {step === 2 &&
                  "Generate a social media post announcing your new developer productivity tool."}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <div className="text-sm font-medium">
                AI is generating content...
              </div>
            </div>
          </div>
          <div>
            <Card
              className={cn(
                "transition-all duration-500 transform",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">Generated Content</div>
                </div>
                {step === 0 && (
                  <div className="text-sm">
                    <h3 className="font-bold text-base mb-2">
                      Top 5 Emerging Programming Languages to Watch in 2025
                    </h3>
                    <p>
                      The tech world is evolving rapidly, and new programming
                      languages are gaining popularity for their unique
                      features. In 2025, keep your eyes on languages like Vala,
                      Zig, and Bicep, as they offer modern solutions for
                      performance, security, and cloud-native development...
                    </p>
                  </div>
                )}
                {step === 1 && (
                  <div className="text-sm">
                    <h3 className="font-bold text-base mb-2">
                      CodeCraft AI: Your Ultimate Coding Sidekick
                    </h3>
                    <p>
                      Meet CodeCraft AI – a powerful code assistant that
                      understands your codebase, autocompletes intelligently,
                      and debugs with precision. Designed for developers who
                      value speed and accuracy, it learns from your habits to
                      optimize every keystroke...
                    </p>
                  </div>
                )}
                {step === 2 && (
                  <div className="text-sm">
                    <h3 className="font-bold text-base mb-2">
                      🚀 Developer Toolkit Just Got Smarter!
                    </h3>
                    <p>
                      Say hello to DevBoost – the all-in-one productivity tool
                      designed for modern developers. Track tasks, manage
                      snippets, automate builds, and collaborate effortlessly.
                      Available now with a free trial. #DevBoost #Productivity
                      #CodeSmart
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-1 text-primary text-xs">
                  <Sparkles className="h-3 w-3" />
                  <span>Generated in 2.3 seconds</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}



