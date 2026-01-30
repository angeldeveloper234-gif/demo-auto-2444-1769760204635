import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-[#080808] text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Side - Vogue Style */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative z-10 aspect-[3/4] max-w-md mx-auto lg:mx-0">
                            <img 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                                alt="Client Portrait"
                                className="w-full h-full object-cover grayscale contrast-125"
                            />
                            <div className="absolute inset-0 border border-[#C6A87C]/30 m-4 pointer-events-none" />
                        </div>
                        {/* Decorative Background Text */}
                        <div className="absolute -top-20 -left-20 text-[10rem] font-serif text-white/5 leading-none select-none pointer-events-none z-0">
                            TRUST
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-12 h-1 bg-[#C6A87C] mb-8" />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10">
                                "In a moment of crisis, <span className="text-[#C6A87C] italic">JM&G</span> provided the clarity and firmness we needed. Their 24/7 availability is real."
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="text-lg font-sans font-bold tracking-widest uppercase">
                                    Roberto S.
                                </div>
                                <div className="h-px w-12 bg-white/20" />
                                <div className="text-zinc-500 font-sans text-sm">
                                    Verified Client
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}