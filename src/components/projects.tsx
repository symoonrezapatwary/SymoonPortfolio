"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Playwright Framework",
        description: "Scalable test automation handling both UI interactions and API validations with 99% reliability.",
        tags: ["Playwright", "TypeScript", "BS Test Observability"],
        icon: "devicon-playwright-plain",
        size: "large", // Spans 2 cols
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Mobile Testing Suite",
        description: "Unified mobile automation strategy for real devices (iOS/Android) reducing regression time by 60%.",
        tags: ["Appium", "Real Devices", "iOS/Android"],
        icon: "devicon-android-plain",
        size: "normal",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Performance Engine",
        description: "High-traffic simulation & bottleneck analysis using K6.",
        tags: ["K6", "JMeter", "InfluxDB"],
        icon: "devicon-k6-plain",
        size: "large", // Spans 2 cols to fill row
        color: "from-purple-500/20 to-violet-500/20"
    },
    {
        title: "CI/CD Pipeline",
        description: "Automated test execution integrated into Azure DevOps pipelines for continuous feedback.",
        tags: ["Azure DevOps", "Docker", "YAML"],
        icon: "devicon-azuredevops-plain",
        size: "normal",
        color: "from-orange-500/20 to-amber-500/20"
    }
]

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Featured Work
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Real-world solutions demonstrating scale, performance, and reliability.
                    </p>
                </motion.div>

                <Button variant="outline" className="gap-2 mt-4">
                    View GitHub <ExternalLink className="h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`group relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/50 dark:bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${project.size === 'large' ? 'md:col-span-2' :
                            project.size === 'tall' ? 'md:row-span-2' : ''
                            }`}
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                        <div className="relative h-full p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-background/50 backdrop-blur-md rounded-xl border border-white/10">
                                    <i className={`${project.icon} colored text-4xl`}></i>
                                </div>
                                <div className="bg-background/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Case Study
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                                <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-background/50 rounded-md border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                                    Read More <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
