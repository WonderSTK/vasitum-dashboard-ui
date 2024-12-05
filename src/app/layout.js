import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400','500', '600', '700'],
  subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vasitum",
  description: "Hr Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* add favicon link */}
        <link rel="icon" href="/logo-small.png" />
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}