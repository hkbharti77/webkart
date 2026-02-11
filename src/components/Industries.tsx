"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
    Building,
    Briefcase,
    Heart,
    Stethoscope,
    Handshake,
    ShoppingBag,
    Landmark,
    Sparkles,
    Utensils,
    GraduationCap,
    Plane
} from "lucide-react";

const industries = [
    { name: "Real Estate", icon: Building },
    { name: "Job & Recruiters", icon: Briefcase },
    { name: "Matrimonial", icon: Heart },
    { name: "Medical & Doctors", icon: Stethoscope },
    { name: "B2B", icon: Handshake },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Banking & Finance", icon: Landmark },
    { name: "Health & Beauty", icon: Sparkles },
    { name: "Food & Beverage", icon: Utensils },
    { name: "School & Education", icon: GraduationCap },
    { name: "Tours & Travel", icon: Plane },
];

export default function Industries() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up" width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            We Serve All Industries
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} width="100%">
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Tailored digital solutions for diverse business sectors.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                    {industries.map((industry, index) => (
                        <FadeIn key={index} delay={index * 0.05} direction="up" width="100%">
                            <div className="aspect-square flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <industry.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white text-center">
                                    {industry.name}
                                </h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
