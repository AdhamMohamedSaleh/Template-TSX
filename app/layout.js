import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s / MySite",
    default: "Welcome / MySite",
  },
  description: "Description of your website",
  icons: {
    icon: `{}/favicon.ico`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex flex-col min-h-full"
      >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
