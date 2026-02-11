import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Webkart
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Transforming ideas into digital reality. We build scalable, high-performance web and mobile solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">SEO</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                                <span className="text-gray-400">Delhi, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                                <span className="text-gray-400">+91 9711110321</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                                <span className="text-gray-400">info@webkartindia.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Webkart Digital Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
