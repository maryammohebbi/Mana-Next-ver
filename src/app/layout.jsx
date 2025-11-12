import "../app/styles/globals.css";
import yekanFont from "../constants/localFont";

export const metadata = {
  title: "اندیشه هوشمند مانا",
  description: "شرکت فنی مهندسی دانش بنیان اهم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanFont.variable} font-sans min-h-screen`}>
        <div className="flex flex-col h-full">{children}</div>
      </body>
    </html>
  );
}
