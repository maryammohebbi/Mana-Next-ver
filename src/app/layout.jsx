import "../app/styles/globals.css";
import yekanFont from "../constants/localFont";

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
