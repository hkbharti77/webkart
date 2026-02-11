"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png" // Ideally this should have a white version or be an SVG that adapts
                alt="Webkart India Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain dark:invert"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Services</Link>
            <Link href="#portfolio" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Portfolio</Link>
            <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="px-4 py-2 rounded-full bg-primary text-white hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#portfolio" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="block px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
