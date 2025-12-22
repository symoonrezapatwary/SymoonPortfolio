"use client"

import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "Automation",
        skills: [
            { name: "Playwright", icon: "devicon-playwright-plain" },
            { name: "Selenium", icon: "devicon-selenium-original" },
            { name: "Appium", icon: "devicon-android-plain" },
        ]
    },
    {
        title: "Performance",
        skills: [
            { name: "K6", icon: "devicon-k6-plain" },
            { name: "JMeter", icon: "devicon-java-plain" }, // JMeter fallback
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Java", icon: "devicon-java-plain" },
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Azure DevOps", icon: "devicon-azuredevops-plain" },
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "Git", icon: "devicon-git-plain" },
            { name: "Postman", icon: "devicon-postman-plain" },
            { name: "SQL", icon: "devicon-microsoftsqlserver-plain" },
        ]
    }
]

export function Skills() {
    return (
        <section id="skills" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Arsenal</h2>
                <p className="mt-4 text-muted-foreground">The tools I use to guarantee excellence.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="font-mono text-sm uppercase tracking-widest text-primary/80">{category.title}</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative flex items-center gap-4 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
                                >
                                    {/* Glowing Background Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-lg bg-background/50 text-2xl">
                                        <i className={`${skill.icon} colored`}></i>
                                    </div>
                                    <span className="relative z-10 font-medium group-hover:text-primary transition-colors">{skill.name}</span>

                                    {/* Animated Bottom Border */}
                                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
