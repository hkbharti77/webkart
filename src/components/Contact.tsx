"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { MapPin, Phone, Mail, Loader2, CheckCircle, Smartphone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form Data:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Get In Touch
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how we can help you achieve your goals.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <FadeIn direction="right" className="h-full">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Our Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Delhi, India</p>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">Serving clients worldwide</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                                        <a href="mailto:info@webkartindia.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                                            info@webkartindia.com
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                                        <Smartphone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Call Us</h4>
                                        <a href="tel:+919711110321" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                                            +91 9711110321
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder or additional info could go here */}
                            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                                <p className="text-blue-800 dark:text-blue-200 text-sm">
                                    "Webkart allows us to focus on our core business while they handle specific technical needs excellently."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn direction="left" delay={0.2} className="h-full">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full relative overflow-hidden">
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 z-10 flex flex-col items-center justify-center text-center p-8"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Thank you for contacting us. We will get back to you shortly.</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                                }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        {...register("subject")}
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.subject ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                            }`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                            }`}
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
