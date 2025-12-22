"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="mr-8 flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Symoon<span className="text-primary">.QA</span>
                    </span>
                </Link>
                <div className="hidden md:flex md:flex-1 md:justify-end md:gap-8 cursor-pointer">
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <Button asChild size="sm" className="bg-primary text-primary-foreground">
                            <Link href="/cv.pdf" target="_blank">Download CV</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-foreground hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link href="/cv.pdf">Download CV</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
