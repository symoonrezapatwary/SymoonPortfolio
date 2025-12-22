"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Mail, ChevronRight, Terminal } from "lucide-react"
import Link from "next/link"
import { TechBackground } from "@/components/tech-background"

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center pt-16">
            <TechBackground />

            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for New Projects
                            </motion.div>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                                <span className="block text-muted-foreground text-2xl sm:text-3xl font-normal mb-2">Hello, I'm</span>
                                <span className="block bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">MD Symoon Reza</span>
                                <span className="block text-primary mt-2">Senior QA Engineer</span>
                            </h1>

                            <p className="max-w-[600px] text-lg text-muted-foreground leading-relaxed">
                                Specializing in <strong>Automation</strong>, <strong>API & Mobile Testing</strong>, and <strong>CI/CD</strong>.
                                I build robust testing frameworks that ensure flawless digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                <Link href="#contact">
                                    Let's Build Quality <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5">
                                <Link href="/cv.pdf" target="_blank">
                                    <Download className="mr-2 h-4 w-4" /> Download CV
                                </Link>
                            </Button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border/40">
                            {[
                                { label: "Algorithmic Problems", value: "350+" },
                                { label: "Test Cases Automated", value: "1k+" },
                                { label: "Years Experience", value: "4+" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                >
                                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content - Floating Cards */}
                    <div className="relative hidden lg:block h-[600px] w-full perspective-1000">

                        {/* Main Card */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -20, x: 50 }}
                            animate={{ opacity: 1, rotateY: -10, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ rotateY: 0, z: 50 }}
                            className="absolute top-[10%] right-[10%] w-[80%] aspect-[4/5] rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden z-10 group"
                        >
                            {/* Simulated Code Editor UI */}
                            <div className="h-full bg-gradient-to-br from-gray-50/80 to-gray-100/40 dark:from-card/80 dark:to-card/40 p-6 flex flex-col relative">
                                <div className="flex items-center gap-2 mb-6 opacity-50">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                                    <p><span className="text-primary">const</span> <span className="text-blue-600 dark:text-blue-400">qaEngineer</span> = &#123;</p>
                                    <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"Symoon Reza"</span>,</p>
                                    <p className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">"Playwright"</span>, <span className="text-green-600 dark:text-green-400">"K6"</span>],</p>
                                    <p className="pl-4">bugsFound: <span className="text-orange-600 dark:text-orange-400">Infinity</span>,</p>
                                    <p>&#125;;</p>
                                    <br />
                                    <p><span className="text-purple-600 dark:text-purple-400">await</span> qaEngineer.<span className="text-blue-600 dark:text-blue-400">automateEverything</span>();</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 1 */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[5%] right-[5%] z-20 bg-white/80 dark:bg-card/80 backdrop-blur-md border border-black/5 dark:border-primary/20 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                <Terminal size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-foreground">Automation</div>
                                <div className="text-xs text-muted-foreground">Expert</div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] left-[0%] z-20 bg-white/80 dark:bg-card/80 backdrop-blur-md border border-black/5 dark:border-primary/20 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-blue-500/10 dark:bg-blue-500/20 p-2 rounded-lg text-blue-600 dark:text-blue-500">
                                <div className="text-xl">🚀</div>
                            </div>
                            <div>
                                <div className="font-bold text-foreground">Performance</div>
                                <div className="text-xs text-muted-foreground">Optimized</div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
