"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react"

type NAVITEM = {
  label: string;
  href: string;
}
const navItems: NAVITEM[] = [
  { label: "Home", href: "/" },
  { label: "Schemes", href: "/schemes" },
  { label: "Analytics", href: "/analytics" },
  { label: "Admin", href: "/admin/dashboard" },
];

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          WelfareGuard
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <motion.span
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </nav>
        <Button size={"sm"}>Login</Button>
      </div>
    </header>
  )
}
