import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full scale-150 pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter mb-8"
                >
                    Ready to launch?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
                >
                    Stop wasting time on setup. Start building your next big idea with the perfect foundation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="h-16 px-10 text-lg rounded-full">
                        Get the Template <ArrowRight className="ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
