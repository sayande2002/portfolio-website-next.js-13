import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Storerovider from "@/app/store/provider";
import "./globals.styles.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Sayan De",
    template: "Sayan De | %s",
  },
  description: "Sayan De Portfolio Website",
  keywords: ["Sayan De", "Sayan De Portfolio Website"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Storerovider>
          <Navbar />
          {children}
          <Footer />
        </Storerovider>
      </body>
    </html>
  );
}
