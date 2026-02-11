import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "CEO, TechFlow",
        content: "Webkart transformed our digital presence. Their team is professional, fast, and incredibly talented.",
        stars: 5,
    },
    {
        name: "Sarah Williams",
        role: "Marketing Director, StyleHub",
        content: "The best web development agency we've worked with. Our conversion rates doubled after the redesign.",
        stars: 5,
    },
    {
        name: "Amit Patel",
        role: "Founder, GreenEco",
        content: "Highly recommended for anyone looking for top-tier SEO and web design services.",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                            <div className="flex mb-4 text-yellow-500">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
