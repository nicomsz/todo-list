import { ReactNode } from "react";
import { TodoList } from "./components/todolist";
import { Rubik } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const rubik = Rubik({
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={rubik.className} >
      <head>
      
      </head>
      <body className="bg-background1">{children}</body>
    </html>
  );
}
