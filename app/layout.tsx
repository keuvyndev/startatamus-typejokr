import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./_components/footer";
import { JokeProvider } from "./_context/joke";
import { Toaster } from "./_components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Type Joke - Every type is a Chuck Norris Joke",
  description: "Every type is a Chuck Norris Joke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <JokeProvider>
          <Toaster />
          {children}
          <Footer />
        </JokeProvider>
      </body>
    </html>
  );
}
