import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const areas = [
    {
        id: "01",
        title: "Urgent Detentions",
        desc: "Immediate legal representation at the police station."
    },
    {
        id: "02",
        title: "Penal Defense",
        desc: "Strategic protection for federal and state crimes."
    },
    {
        id: "03",
        title: "Amparos",
        desc: "Constitutional protection against authority abuse."
    }
];

export function PracticeAreas() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#030303] text-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <h2 className="text-5xl md:text-7xl font-serif text-white">
                        Areas of <span className="text-[#C6A87C] italic">Practice</span>
                    </h2>
                    <p className="text-zinc-500 font-sans uppercase tracking-widest text-sm mt-4 md:mt-0">
                        Comprehensive Legal Solutions
                    </p>
                </div>

                <div className="flex flex-col">
                    {areas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/10 py-12 cursor-pointer transition-colors duration-500 hover:bg-white/5"
                        >
                            <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-6 px-4">
                                <div className="flex items-baseline gap-8 md:gap-16">
                                    <span className="text-sm font-sans text-[#C6A87C] font-bold tracking-widest">
                                        /{area.id}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-serif text-zinc-300 group-hover:text-white transition-colors">
                                        {area.title}
                                    </h3>
                                </div>
                                
                                <div className="flex items-center gap-8 md:w-1/3 justify-between">
                                    <p className="text-zinc-500 font-sans text-sm md:text-base group-hover:text-zinc-300 transition-colors max-w-xs">
                                        {area.desc}
                                    </p>
                                    <ArrowUpRight className="w-6 h-6 text-[#C6A87C] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}