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
      className="body overflow-x-hidden" 
      >{children}
        <div className="flex footer font-[600] py-4 flex-col text-center gap-1 mt-4 items-center justify-center bg-[hsl(217,100%,97%)]">
        <span>Built with love by <span className="text-[hsl(354,84%,57%)]">Olayinka_Dev.</span> Follow and give it a star on github</span>
        <a className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg" href="">GitHub</a>
      </div>
      </body>
    </html>
  );
}
