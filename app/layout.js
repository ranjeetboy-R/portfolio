import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Ranjeet",
  description: "Ranjeet's professional portfolio featuring web development projects, technical expertise, and services. Explore innovative solutions and get in touch for collaboration opportunities.",
  keywords: ['ranjeetportfolio', "portfolio", "landingpage", "nextjs", "fullstack", 'reactjs', "expressjs", 'nodejs'],
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${outfit.variable} ${ovo.variable} h-full antialiased min-h-full flex flex-col `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
