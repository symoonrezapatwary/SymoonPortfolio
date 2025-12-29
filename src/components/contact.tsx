"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative">
            <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-3xl p-8 md:p-16 relative overflow-hidden">

                {/* Decorative Blobs */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />

                <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Build Quality Together</h2>
                        <p className="text-muted-foreground text-lg">
                            Have a project in mind or just want to chat about automation? I'm always open to discussing new opportunities.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Link href="https://www.linkedin.com/in/md-symoon-reza-patwary-anik-862126233/" target="_blank" className="p-3 rounded-full bg-background border border-white/10 hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-background border border-white/10 hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="mailto:symoonrezapatwaryanik@gmail.com" className="p-3 rounded-full bg-background border border-white/10 hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                placeholder="Your Name"
                                className="w-full h-12 rounded-xl bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="email"
                                placeholder="Your Email"
                                className="w-full h-12 rounded-xl bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                placeholder="How can I help?"
                                rows={4}
                                className="w-full rounded-xl bg-background/50 border border-white/10 p-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium resize-none"
                            />
                        </div>
                        <Button size="lg" className="w-full h-12 rounded-xl text-base group">
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
