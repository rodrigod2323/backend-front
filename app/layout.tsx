import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Provider from '@/redux/provider';
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/common";
import { Setup } from "@/components/utils";

const comfortaa = Comfortaa({
  weight: '300',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dad Task",
  description: "Dad Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>

        <Provider>
          <Setup />

          <Navbar />
          <div className='mx-auto max-w-7x1 px-2 sm:px6 lg:px-8 my-8'>

          {children}

          </div>

          <Footer />

        </Provider>

      </body>
    </html>
  );
}
