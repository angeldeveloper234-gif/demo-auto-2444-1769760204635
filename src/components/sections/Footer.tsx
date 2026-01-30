import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-[#030303] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-white/10 hover:text-white/20 transition-colors cursor-default mb-12"
                    >
                        JM&G ASOCIADOS
                    </motion.h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
                        <div className="text-zinc-500 text-sm">
                            <p>© {new Date().getFullYear()} JM&G Asociados.</p>
                            <p>All rights reserved.</p>
                        </div>
                        <div className="flex justify-center gap-6 text-sm font-medium tracking-widest uppercase">
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">Twitter</a>
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">Instagram</a>
                        </div>
                        <div className="md:text-right text-zinc-500 text-sm">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <span className="mx-2">•</span>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}