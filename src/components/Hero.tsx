import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-bg.webp"
                    alt="Digital Agency Background"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    Build Your Digital <br />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Presence Today
                    </span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    We craft high-performance websites and digital strategies that drive growth and engagement for your business.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
                    >
                        View Work
                    </Link>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent" />
                <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-[100px] -left-[200px] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl opacity-50" />
            </div>
        </section>
    );
}
