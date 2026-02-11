
import Image from "next/image";
import { Code, Smartphone, BarChart, Database } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const services = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "Custom websites built with Next.js and React for optimal performance and SEO.",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: "Digital Marketing",
        description: "Data-driven strategies to increase your visibility and ROI online.",
    },
    {
        icon: <Image src="/seo.png" alt="SEO" width={32} height={32} className="w-8 h-8 object-contain" />,
        title: "SEO Optimization",
        description: "Rank higher on search engines and attract organic traffic to your site.",
    },
    {
        icon: <Image src="/ux.png" alt="UI/UX" width={32} height={32} className="w-8 h-8 object-contain" />,
        title: "UI/UX Design",
        description: "User-centric designs that convert visitors into customers.",
    },
    {
        icon: <Database className="w-8 h-8 text-primary" />,
        title: "E-Commerce",
        description: "Scalable online stores with secure payment gateways and inventory management.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up" width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} width="100%">
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                            <div
                                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
                            >
                                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg inline-block">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
