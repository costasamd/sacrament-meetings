import { Metadata } from "next";
import "./globals.css";
import {Noto_Serif} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const noto = Noto_Serif({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Wigan Ward | Sacrament Meeting',
  description: 'Weekly Sacrament meeting agendas for Wigan Ward',
};

export default function RootLayout ({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto.className} flex min-h-screen flex-col bg-slate-50 text-slate-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
