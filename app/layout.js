import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./../components/ui/provider";
import Header from "./../components/Header";
import { UserProvider } from "./userContext";
import Footer from "./../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linkfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Header />
          <main>
            <UserProvider>{children}</UserProvider>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
