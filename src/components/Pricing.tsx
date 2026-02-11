"use client";

import { Check } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Starter",
        price: "$999",
        description: "Perfect for small businesses and personal portfolios.",
        features: [
            "5 Pages Website",
            "Mobile Responsive Design",
            "Basic SEO Setup",
            "Contact Form Integration",
            "1 Month Support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Business",
        price: "$2,499",
        description: "Ideal for growing companies needing more features.",
        features: [
            "10 Pages Website",
            "Advanced SEO Optimization",
            "CMS Integration",
            "Social Media Integration",
            "Speed Optimization",
            "3 Months Support"
        ],
        cta: "Choose Business",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large-scale applications.",
        features: [
            "Unlimited Pages",
            "Custom Web Application",
            "E-commerce Functionality",
            "API Integrations",
            "Priority Support",
            "Dedicated Project Manager"
        ],
        cta: "Contact Us",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up" width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Simple, Transparent Pricing
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} width="100%">
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Choose the plan that best fits your business needs.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                            <div className={`relative flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 ${plan.popular
                                ? "bg-gray-900 dark:bg-gray-800 text-white border-primary shadow-xl md:scale-105 z-10"
                                : "bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50"
                                }`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                            {plan.price}
                                        </span>
                                    </div>
                                    <p className={`mt-4 text-sm ${plan.popular ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-grow mb-8 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                                            <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="#contact"
                                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                        ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30"
                                        : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
