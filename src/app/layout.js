import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Multi-Step-Form",
  description: "Created by Olayinka_dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
      className="body" 
      >{children}</body>
    </html>
  );
}
