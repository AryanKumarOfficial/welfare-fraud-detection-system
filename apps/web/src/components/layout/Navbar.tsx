"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Menu, Sun, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Schemes", href: "/schemes" },
  { label: "Analytics", href: "/analytics" },
  { label: "Admin", href: "/admin/dashboard" },
];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LEFT: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-colors" />
              <div className="relative bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Shield className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none">
                <span className="text-primary">Welfare</span>
                <span className="text-foreground">Guard</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Fraud Detection
              </span>
            </div>
          </Link>

          {/* CENTER: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2">
            {isClient && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted/50 transition-colors relative overflow-hidden"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block"
            >
              <Button className="relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Dashboard
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold text-lg">
                          <span className="text-primary">Welfare</span>
                          <span className="text-foreground">Guard</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
                              pathname === item.href
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            {pathname === item.href && (
                              <div className="w-1 h-5 bg-primary rounded-full" />
                            )}
                            {item.label}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="p-4 border-t">
                    <SheetClose asChild>
                      <Button className="w-full">
                        <ChevronRight className="h-4 w-4 mr-2" />
                        Go to Dashboard
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
