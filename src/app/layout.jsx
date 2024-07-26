import { Gabarito } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const gabarito = Gabarito({ subsets: ["latin"] });


export const metadata = {
  title: "Movie List",
  description: "Welcome to Movie List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className}`}
        style={{
          background: 'linear-gradient(to bottom, #112031 65%, #000000)',
          minHeight: '100vh'
        }}
        suppressHydrationWarning={true}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
