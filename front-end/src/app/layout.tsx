import { ReactNode } from "react";
import { TodoList } from "./components/todolist";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-background1">
      <body>{children}</body>
    </html>
  );
}
