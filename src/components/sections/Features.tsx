import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";

// Re-exporting BentoGrid as features for semantic consistency if preferred, 
// OR we can make a simpler list version. 
// Given the user liked Bento, we kept BentoGrid separate, but let's provide a "SimpleFeatures" alternative here 
// so the user has choices as requested ("create various templates").

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built on Vite and SWC for instant deployments and reload times."
    },
    {
        icon: Shield,
        title: "Strict Architecture",
        description: "TypeScript strict mode and rigorous linting for bulletproof code."
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Deployed on Netlify with robust routing and caching strategies."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-zinc-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to build world-class web applications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center text-center p-6 bg-zinc-800/30 rounded-2xl border border-white/5"
                        >
                            <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/10">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* We can include the Bento style as a sub-section or alternative */}
                <div className="mt-32">
                    <BentoGrid />
                </div>
            </div>
        </section>
    );
}
