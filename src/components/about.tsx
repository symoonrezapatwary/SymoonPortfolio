"use client"

import { motion } from "framer-motion"
import { Code2, Bug, Zap } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

export function About() {
    const stats = [
        { label: "Years Experience", value: "4+", icon: Zap },
        { label: "Algorithmic Problems Solved", value: "350+", icon: Code2 },
        { label: "Test Cases Automated", value: "1k+", icon: Bug },
    ]

    return (
        <section id="about" className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative">
            {/* Decorative Background Blur */}
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] opacity-20 bg-primary/30 blur-[120px] rounded-full" />

            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 items-start">

                {/* Main Content (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        <span className="text-primary block text-sm font-mono mb-2 uppercase tracking-widest">About Me</span>
                        Architecting Reliability.
                    </h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            I am a <strong>Senior Software QA Engineer</strong> obsessed with breaking things so users don't have to. With over <strong>4 years</strong> of experience, I specialize in building robust test automation frameworks that scale.
                        </p>
                        <p>
                            My background isn't just testing; it's engineering. Having solved <strong>350+ algorithmic problems</strong>, I bring a developer's mindset to QA, ensuring valid code quality from the very first line.
                        </p>
                    </div>

                    {/* Key Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {[
                            "Automation First Mindset", "CI/CD Integration Expert",
                            "Performance Engineering", "Mobile Testing (iOS/Android)"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 border border-border/50"
                            >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                                <span className="font-medium text-sm">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Sidebar / Visual (Right) */}
                <div className="relative mt-8 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 grid gap-6"
                    >
                        {/* Profile Card Placeholder */}
                        <div className="aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/5 dark:to-white/0 shadow-2xl relative group">
                            <Image
                                src="/me.jpg"
                                alt="MD Symoon Reza Patwary Anik"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Floating Stats Sidebar Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent pt-24 space-y-4">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-card/40 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <stat.icon size={16} />
                                            </div>
                                            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                        <div className="font-bold font-mono">{stat.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements behind image */}
                    <div className="absolute top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
                </div>
            </div>
        </section>
    )
}
