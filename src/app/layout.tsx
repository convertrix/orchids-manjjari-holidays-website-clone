import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  title: "Manjjari Holidays - Tour & Travel Management Company | Bhubaneswar, Odisha",
  description: "Manjjari Holidays offers premium tour planning and management services in Odisha, Chhattisgarh & India. Eco tours, tribal tours, photography tours, cab services & hotel booking.",
  keywords: "Manjjari Holidays, Odisha tours, Bhubaneswar travel agency, eco tours, tribal tours, India tours, cab services, hotel booking",
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
