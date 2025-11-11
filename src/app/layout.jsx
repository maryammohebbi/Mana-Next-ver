import "../app/styles/globals.css";
import yekanFont from "../constants/localFont";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "اندیشه هوشمند مانا",
  description: "شرکت فنی مهندسی دانش بنیان اهم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${yekanFont.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
