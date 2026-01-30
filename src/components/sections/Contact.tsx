import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Message sent!");
    };

    return (
        <section id="contact" className="py-0 bg-[#030303] text-white border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
                
                {/* Map Side */}
                <div className="relative h-[400px] lg:h-auto bg-zinc-900 overflow-hidden">
                    <div className="absolute inset-0 grayscale invert contrast-125 brightness-75">
                         {/* Placeholder for Map - In production use Google Maps Embed */}
                         <img 
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                            alt="Map Location"
                            className="w-full h-full object-cover opacity-50"
                         />
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 bg-black/80 backdrop-blur-md border-t border-r border-white/10">
                        <h3 className="text-[#C6A87C] font-serif text-xl mb-2">JM&G Asociados</h3>
                        <p className="text-zinc-400 font-sans text-sm">Ejutla de Crespo, Oaxaca</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex items-center justify-center p-8 lg:p-20">
                    <div className="w-full max-w-md">
                        <div className="mb-12">
                            <h2 className="text-4xl font-serif mb-4">Contact Us</h2>
                            <p className="text-zinc-500">Strict confidentiality guaranteed.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="space-y-2">
                                <input
                                    {...register("name")}
                                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C6A87C] transition-colors placeholder:text-zinc-700"
                                    placeholder="FULL NAME"
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <input
                                    {...register("email")}
                                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C6A87C] transition-colors placeholder:text-zinc-700"
                                    placeholder="EMAIL ADDRESS"
                                />
                                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    {...register("message")}
                                    rows={3}
                                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#C6A87C] transition-colors resize-none placeholder:text-zinc-700"
                                    placeholder="CASE DETAILS"
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-white text-black hover:bg-[#C6A87C] rounded-none py-6 uppercase tracking-widest font-bold"
                            >
                                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}