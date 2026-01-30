import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/features/BookingModal";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030303]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                    alt="Law Office Architecture"
                    className="w-full h-full object-cover opacity-40 grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    
                    {/* Text Content - Asymmetric Layout */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Render HTML Headline from Blueprint */}
                            <div className="font-serif leading-[0.9] tracking-tight">
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                                    <span className="block text-white/40 italic text-4xl md:text-5xl mb-4 font-light tracking-normal font-sans">Reinventing</span> 
                                    <span className="block text-white">CRIMINAL</span> 
                                    <span className="block text-[#C6A87C] ml-0 md:ml-20">DEFENSE</span>
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                        >
                            <BookingModal 
                                trigger={
                                    <Button className="bg-[#C6A87C] text-black hover:bg-[#b09265] rounded-none px-8 py-6 text-lg tracking-widest uppercase font-sans font-semibold">
                                        Immediate Assistance
                                    </Button>
                                }
                            />
                            <div className="h-px w-20 bg-white/20 hidden sm:block" />
                            <p className="text-zinc-400 font-sans text-sm tracking-widest uppercase">
                                Est. JM&G | 24/7 Support
                            </p>
                        </motion.div>
                    </div>

                    {/* Floating Card / Decorative Element */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 max-w-xs ml-auto"
                        >
                            <div className="text-[#C6A87C] text-4xl font-serif mb-4">"</div>
                            <p className="text-zinc-300 font-serif italic text-lg leading-relaxed mb-6">
                                Justice is not just a concept, it is a practice of precision.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#C6A87C] rounded-full" />
                                <div>
                                    <div className="text-white text-sm font-bold uppercase tracking-wider">Senior Partner</div>
                                    <div className="text-white/40 text-xs">JM&G Asociados</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}