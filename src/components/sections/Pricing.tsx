import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Starter",
        price: "$29",
        features: ["5 Projects", "Strict Types", "Basic Support"],
    },
    {
        name: "Pro",
        price: "$99",
        featured: true,
        features: ["Unlimited Projects", "Priority Support", "Advanced Analytics", "Custom Components"],
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["SLA", "Dedicated Manager", "On-premise Deployment"],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple Pricing</h2>
                    <p className="text-zinc-400">Transparent costs for every stage of your growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.featured
                                    ? "bg-zinc-900/80 border-white/20 shadow-2xl shadow-indigo-500/10"
                                    : "bg-black/40 border-white/5"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Popular
                                </div>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-6">{plan.price}</div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-zinc-400">
                                        <Check className="w-5 h-5 text-white" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.featured ? "primary" : "outline"}
                                className="w-full"
                            >
                                Choose {plan.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
