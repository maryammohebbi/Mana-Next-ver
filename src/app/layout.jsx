import "@/styles/globals.css";
import yekanFont from "@/constants/localFont";
import { DarkModeProvider } from "@/context/DarkModeContext";

export const metadata = {
  title: "اندیشه هوشمند مانا",
  description: "شرکت فنی مهندسی دانش بنیان اهم",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="fa" dir="rtl">
        <body
          className={`${yekanFont.variable} font-sans min-h-screen bg-primary`}
        >
          <div className="flex flex-col h-full">{children}</div>
        </body>
      </html>
    </DarkModeProvider>
  );
}
