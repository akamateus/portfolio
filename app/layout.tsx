import Header from "@/components/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

import DarkMode from "@/components/dark-mode";
import ModeContextProvider from "@/context/mode-context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "akaMateus • Web Dev",
  description: "Mateus is a Junior full-stack developer & Journalist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${montserrat.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        // h-[5000px]
      >
        <div className="bg-[#fff7c5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ff312e]"></div>
        <div className="bg-[#f5bcbc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem] dark:bg-[#676394]"></div>
        <Toaster position="bottom-right" reverseOrder={false} />

        <ModeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <DarkMode />
          </ActiveSectionContextProvider>
        </ModeContextProvider>
      </body>
    </html>
  );
}
