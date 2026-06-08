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
  title: "Ranjeet Kumar | Full-Stack Web Developer",
  description:
    "Professional portfolio of Ranjeet Kumar, a Full-Stack Web Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and modern web applications. Explore projects, skills, and development services.",

  keywords: [
    "Ranjeet Kumar",
    "Ranjeet Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Portfolio Website",
    "Web Development Services",
    "Freelance Developer"
  ],
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
