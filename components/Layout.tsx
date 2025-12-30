import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page-container bg-[var(--ov-primary-bg)] text-[var(--foreground)]">
      <Header />
      <main className="page-content bg-[var(--ov-primary-bg)]">{children}</main>
      <Footer />
    </div>
  );
}
