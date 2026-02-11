import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Join hundreds of satisfied clients who have scaled their business with our expert web solutions.
                </p>
                <Link
                    href="#contact"
                    className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                    Get Free Consultation
                </Link>
            </div>
        </section>
    );
}
