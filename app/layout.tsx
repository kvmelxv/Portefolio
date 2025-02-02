import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Anek_Telugu} from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--var-caption",
});

export const metadata: Metadata = {
  title: "Mustapha Kamel Cherif",
  description: "FUll stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body> 
    </html>
  );
}
