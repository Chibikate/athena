"use client";

import { Flowbite } from "flowbite-react";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-gray-800`}
      >
        <Flowbite>
          <main>{children}</main>
        </Flowbite>
      </body>
    </html>
  );
}
