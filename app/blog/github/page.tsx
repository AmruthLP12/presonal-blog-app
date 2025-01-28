"use client";

import { useState } from "react";
import Image from "next/image";
import CodeSnippet from "@/app/components/CodeSnippet";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getYouTubeThumbnail, getYouTubeVideoId } from "@/utils/youtube";

const categories = [
  { name: "Git", variant: "default" as const },
  { name: "GitHub", variant: "secondary" as const },
  { name: "VS Code", variant: "outline" as const },
  { name: "Version Control", variant: "secondary" as const },
  { name: "Beginner", variant: "default" as const },
];

const screenshots = [
  {
    title: "Creating a new repository",
    src: "/placeholder.svg?height=200&width=400",
  },
  { title: "Git initialization", src: "/placeholder.svg?height=200&width=400" },
  {
    title: "VS Code integration",
    src: "/placeholder.svg?height=200&width=400",
  },
];

export default function GitHubSetupGuide() {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/Fyimm_N0Gy8";
  const videoId = getYouTubeVideoId(videoUrl);
  const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;

  return (
    <article className="container max-w-4xl mx-auto py-8 px-4">
      <div className="space-y-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category.name} variant={category.variant}>
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Thumbnail */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          Getting Started with GitHub: A Complete Guide
        </h1>

        {/* Video */}

        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="GitHub Setup Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Introduction */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            In this guide, we'll explore how to set up GitHub, a powerful
            platform for developers to collaborate and share code. Whether
            you're a complete beginner or just need a refresher, this
            step-by-step tutorial will help you get started with GitHub and VS
            Code.
          </p>

          {/* Key Takeaways */}
          <Card className="p-6 my-8">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Create a GitHub account and verify it</li>
              <li>Install Git on your system</li>
              <li>Set up your identity in Git</li>
              <li>Create a repository and push your first file</li>
              <li>Use VS Code for coding and version control</li>
            </ul>
          </Card>

          {/* Main Content Sections */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Creating Your GitHub Account
              </h2>
              <p className="text-muted-foreground mb-4">
                To kick things off, you need to create a GitHub account. Here's
                how:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Open your web browser and go to github.com</li>
                <li>
                  Enter your email address and click on "Sign up for GitHub"
                </li>
                <li>Create a strong password</li>
                <li>Verify your account through the email sent to you</li>
                <li>Once verified, sign in with your new credentials</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Setting Up Your Identity
              </h2>
              <p className="text-muted-foreground mb-4">
                Before you start using Git, you need to set up your identity:
              </p>
              <CodeSnippet
                language="bash"
                code={`
                  git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
git config --list
                `}
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Creating Your First Repository
              </h2>
              <p className="text-muted-foreground mb-4">
                Initialize your repository and push your first commit:
              </p>
              <CodeSnippet
                language="bash"
                code={`
                  git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
                `}
              />
            </div>

            {/* Screenshots Gallery */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Visual Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((screenshot, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium">{screenshot.title}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-muted p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
              <p className="text-muted-foreground">
                Congratulations! You've successfully set up GitHub, created a
                repository, and pushed your first file. You've also learned how
                to use VS Code for coding and version control. If you found this
                guide helpful, don't forget to like and subscribe for more
                tutorials!
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
