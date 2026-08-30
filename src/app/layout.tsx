import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&M Health Clinic | Massage Therapists in Fitzrovia, London",
  description:
    "A discreet Fitzrovia massage clinic open late. Deep tissue, relaxing and therapeutic massage, cupping and acupuncture. Book by phone, 020 7388 8199.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ground text-cream">
        <div className="grain bg-noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
