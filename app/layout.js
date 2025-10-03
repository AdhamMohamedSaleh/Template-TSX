import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s / MySite",
    default: "Welcome / MySite",
  },
  description: "Description of your website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-full bg-white"
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
