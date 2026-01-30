import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/features/BookingModal";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#", label: "Home" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white">
                    JM&G<span className="text-[#C6A87C]">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-sans font-medium tracking-widest uppercase text-zinc-400 hover:text-[#C6A87C] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <BookingModal 
                        trigger={
                            <Button variant="outline" size="sm" className="rounded-none border-[#C6A87C] text-[#C6A87C] hover:bg-[#C6A87C] hover:text-black uppercase tracking-widest text-xs px-6">
                                Consultation
                            </Button>
                        }
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-20 left-0 right-0 bg-[#030303] border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-serif text-zinc-300 hover:text-[#C6A87C] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <BookingModal 
                        trigger={
                            <Button className="w-full bg-[#C6A87C] text-black rounded-none uppercase tracking-widest">
                                Book Consultation
                            </Button>
                        }
                    />
                </motion.div>
            )}
        </nav>
    );
}