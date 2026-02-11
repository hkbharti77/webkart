"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Code2, Smartphone, Layers, Layout, Database, ShoppingBag, Globe, Coffee, FileCode2, Cpu } from "lucide-react";

const technologies = [
    { name: "HTML5", icon: Layout, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "CSS3", icon: Layers, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Bootstrap", icon: Layout, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { name: "PHP", icon: Code2, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
    { name: "Java", icon: Coffee, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { name: "Python", icon: FileCode2, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { name: "Next.js", icon: Cpu, color: "text-gray-900 dark:text-white", bg: "bg-gray-100 dark:bg-gray-800" },
    { name: "Flutter", icon: Smartphone, color: "text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Magento", icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "WordPress", icon: Globe, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Joomla", icon: Layers, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "Android", icon: Smartphone, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
];

export default function TechStack() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up" width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Advanced Web Technology
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} width="100%">
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We use the latest frameworks and technologies to build scalable, high-performance solutions.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technologies.map((tech, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up" width="100%">
                            <div className="aspect-square group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center h-full">
                                <div className={`w-12 h-12 ${tech.bg} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {tech.name}
                                </h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
