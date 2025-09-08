// Next
import type { Metadata } from "next";
// Next

// CSS
import "./globals.css";
import styles from "./layout.module.css";
import "./index.css";
// CSS

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import ToCLIENT from "./Components/TOCLIENT/TOCLIENT";
// Components

export const metadata: Metadata = {
  title: "Ali Goodarzi Personal Website",
  description: "Developed By AliGoodarzi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${styles.layoutContainer} w-full flex flex-row items-center justify-between`}
      >
        <ToCLIENT />
        <Sidebar />
        <div className={`${styles.content}`}>{children}</div>
      </body>
    </html>
  );
}
