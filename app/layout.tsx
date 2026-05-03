import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Autowriter — AI-Powered Changelogs from Git History",
  description: "Automatically generate user-facing changelogs from git commits and PR descriptions using AI. Semantic versioning, categorized changes, markdown output."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d55f7da2-d761-4942-864e-a3612230e3ed"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
