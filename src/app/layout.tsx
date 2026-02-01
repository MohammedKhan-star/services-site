import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ProjectWorksStudio",
  description: "Founder-led web development studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main className="pt-2">{children}</main>
      </body>
    </html>
  );
}
