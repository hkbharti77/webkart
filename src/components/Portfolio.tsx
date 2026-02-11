import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "/ecommerce.png",
    },
    {
        title: "Finance Dashboard",
        category: "UI/UX Design",
        image: "/ux.png",
    },
    {
        title: "Health Tech App",
        category: "Mobile App",
        image: "/seo.png", // Using SEO icon as placeholder for app
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Explore some of our recent projects and success stories.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.2} direction="up">
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <div className="aspect-video bg-gray-50 dark:bg-gray-900 relative flex items-center justify-center p-8">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-blue-300 font-medium text-sm mb-1">{project.category}</span>
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
