import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metrics Leak Detector — Find Hidden Revenue Leaks",
  description: "Analyze your startup funnel and identify exactly where revenue is leaking. AI-powered insights for founders and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61a6f2b9-256a-4fff-a266-07e227065879"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
