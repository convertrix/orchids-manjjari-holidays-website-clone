import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  metadataBase: new URL('https://manjjariholidays.com'),
  title: {
    default: "Manjjari Holidays | Best Travel Agency in Bhubaneswar, Odisha",
    template: "%s | Manjjari Holidays"
  },
  description: "Manjjari Holidays is the best travel agency in Bhubaneswar, Odisha. We are premier tour operators offering custom tour and travel packages, eco tours, and cab services across Odisha.",
  keywords: [
    "travel agency in bhubaneswar",
    "best travel agency in odisha",
    "travel company in bhubaneswar",
    "tour and travel in bhubaneswar",
    "travel agency bhubaneswar odisha",
    "best tour operators in bhubaneswar",
    "best tour operators in odisha",
    "tour & travel agency in bhubaneswar",
    "best tour and travels in bhubaneswar",
    "Manjjari Holidays",
  ],
  authors: [{ name: "Manjjari Holidays" }],
  creator: "Manjjari Holidays",
  publisher: "Manjjari Holidays",
  openGraph: {
    title: "Manjjari Holidays | Best Travel Agency in Bhubaneswar, Odisha",
    description: "Discover Odisha with the best travel agency in Bhubaneswar. We offer expertly crafted tour packages, eco tours, and premier travel services.",
    url: "https://manjjariholidays.com",
    siteName: "Manjjari Holidays",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
