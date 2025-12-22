"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const experience = [
    {
        role: "Software QA Engineer",
        company: "JustGo",
        date: "07/2024 – Present",
        current: true,
        description: [
            "Perform software quality assurance and testing to maintain high product standards.",
            "Collaborate with cross-functional teams to enhance product performance.",
            "Design and implement test automation scripts using Playwright.",
            "Integrate automated test suites into Azure pipelines.",
            "Conduct testing for iOS and Android mobile applications."
        ],
        tech: ["Playwright", "Azure DevOps", "Mobile Testing"]
    },
    {
        role: "Software QA Engineer",
        company: "EchoLogyx Ltd",
        date: "03/2024 – 06/2024",
        description: [
            "Conducted A/B testing for design and feature variations.",
            "Executed manual and automated testing for software reliability.",
            "Collaborated with teams to maintain high product quality."
        ],
        tech: ["A/B Testing", "Automation", "Manual Testing"]
    },
    {
        role: "Senior Software QA Engineer",
        company: "Unidevgo Software Solutions",
        date: "12/2023 – 03/2024",
        description: [
            "Designed Playwright-based automation scripts.",
            "Ensured high-quality releases through API and Load testing (K6).",
            "Specialized in UI automation and regression testing."
        ],
        tech: ["Playwright", "K6", "API Testing"]
    },
    {
        role: "Software QA Engineer",
        company: "Unidevgo Software Solutions",
        date: "01/2022 – 11/2023",
        description: [
            "Verified system functionality and stability across releases.",
            "Conducted API and load testing using Postman, JMeter, and K6."
        ],
        tech: ["Postman", "JMeter", "K6"]
    },
    {
        role: "Software QA Engineer",
        company: "6sense",
        date: "09/2021 – 12/2021",
        description: [
            "Executed multiple testing methodologies for performance.",
            "Identified, documented, and reported defects."
        ],
        tech: ["Performance Testing", "Defect Reporting"]
    }
]

export function Experience() {
    return (
        <section id="experience" className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 relative z-10"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl">Evolution of my expertise in Quality Engineering.</p>
            </motion.div>

            <div className="relative z-10 border-l border-border/50 ml-3 md:ml-4 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 -translate-x-[5px] top-2 h-2.5 w-2.5 rounded-full border border-background ${job.current ? 'bg-primary shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse' : 'bg-muted-foreground/30'}`} />

                        <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:from-primary/10 transition-all duration-500">
                            <div className="relative h-full bg-white/50 dark:bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-lg">

                                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                            {job.role}
                                        </h3>
                                        <p className="text-muted-foreground font-medium">{job.company}</p>
                                    </div>
                                    <div className={`self-start px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${job.current ? 'bg-primary/20 text-primary border-primary/50' : 'bg-secondary/50 text-muted-foreground border-transparent'}`}>
                                        {job.date}
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                                            <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.tech.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
