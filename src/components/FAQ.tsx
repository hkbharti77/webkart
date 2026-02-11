"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while more complex e-commerce or custom web applications can take 6-12 weeks."
    },
    {
        question: "Do you offer website maintenance?",
        answer: "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. We handle updates, backups, and minor content changes."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are designed with a mobile-first approach, ensuring they look and perform perfectly on smartphones, tablets, and desktop computers."
    },
    {
        question: "Can you help with SEO?",
        answer: "Yes, basic on-page SEO is included in all our web development projects. We also offer advanced SEO services to help improve your search engine rankings and drive more organic traffic."
    },
    {
        question: "What platforms do you work with?",
        answer: "We specialize in Next.js, React, and WordPress. We choose the best technology stack based on your specific project requirements and scalability needs."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Got questions? We've got answers.
                        </p>
                    </FadeIn>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </span>
                                    <span className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full text-primary">
                                        {activeIndex === index ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
