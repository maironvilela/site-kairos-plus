"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const testimonials = [
    {
        id: 1,
        name: "Ana Clara Silva",
        text: "Simplesmente apaixonada pelas peças! O caimento é perfeito e o tecido de altíssima qualidade. Chegou super rápido!",
        rating: 5,
        location: "São Paulo, SP",
    },
    {
        id: 2,
        name: "Mariana Santos",
        text: "Amei a consultoria de moda, me ajudou muito a escolher as roupas certas para o meu tipo de corpo. Recomendo demais!",
        rating: 5,
        location: "Rio de Janeiro, RJ",
    },
    {
        id: 3,
        name: "Fernanda Lima",
        text: "As roupas fitness são incríveis, não ficam transparentes e dão muita segurança para treinar. Virei cliente fiel!",
        rating: 5,
        location: "Belo Horizonte, MG",
    },
    {
        id: 4,
        name: "Patrícia Souza",
        text: "Comprei um biquíni e a qualidade me surpreendeu. A modelagem é real e valoriza muito o corpo. Parabéns à marca!",
        rating: 5,
        location: "Salvador, BA",
    },
    {
        id: 5,
        name: "Juliana Costa",
        text: "O atendimento humanizado faz toda a diferença. Tive dúvidas sobre o tamanho e fui super bem atendida no WhatsApp.",
        rating: 5,
        location: "Curitiba, PR",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    const getCardStyle = (index: number) => {
        // Basic 3D effect emulation using scale and opacity based on distance from current index
        // This is a simplified approach. Ideally we map indices to positions.
        // For a centered 3D carousel of dynamic length, we usually compute relative positions.

        const diff = (index - currentIndex + testimonials.length) % testimonials.length;

        // Determine visual position: 0 is center, 1 is right, length-1 is left
        // We only show Center, Left, Right. Others hidden or far back.

        if (index === currentIndex) {
            return {
                zIndex: 30,
                scale: 1,
                x: 0,
                opacity: 1,
                rotateY: 0,
            };
        } else if (diff === 1 || diff === - (testimonials.length - 1)) {
            // Right card
            return {
                zIndex: 20,
                scale: 0.85,
                x: 100, // Partial overlap
                opacity: 0.6,
                rotateY: -15,
            };
        } else if (diff === testimonials.length - 1 || diff === -1) {
            // Left card
            return {
                zIndex: 20,
                scale: 0.85,
                x: -100, // Partial overlap
                opacity: 0.6,
                rotateY: 15,
            };
        } else {
            // Others hidden
            return {
                zIndex: 10,
                scale: 0.7,
                x: 0,
                opacity: 0,
                rotateY: 0,
            };
        }
    };

    // Alternative simpler manual mapping for smooth circular infinity loop
    // Center is index 0 relative to view.
    // We actually need to map the items to fixed "slots" (Left, Center, Right).
    // Let's rely on Framer Motion's AnimatePresence with 'popLayout' or custom variants won't be enough for complex 3D loop easily.
    // Better approach: Simply render 3 items: Prev, Current, Next, derived from currentIndex.

    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    const visibleItems = [
        { ...testimonials[prevIndex], position: "left", key: `prev-${testimonials[prevIndex].id}` },
        { ...testimonials[currentIndex], position: "center", key: `curr-${testimonials[currentIndex].id}` },
        { ...testimonials[nextIndex], position: "right", key: `next-${testimonials[nextIndex].id}` },
    ];

    return (
        <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <FadeIn>
                    <div className="mb-16 space-y-4">
                        <span className="text-kairos-wine font-semibold uppercase tracking-wider text-sm">
                            Depoimentos
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900">
                            O que dizem nossos <span className="font-cursive text-5xl text-kairos-wine">Clientes</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="relative h-[400px] flex items-center justify-center perspective-1000">
                    {/* Navigation Buttons - Absolute centered vertically */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-20 z-40 p-3 rounded-full bg-white shadow-lg text-kairos-wine hover:scale-110 transition-transform"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-20 z-40 p-3 rounded-full bg-white shadow-lg text-kairos-wine hover:scale-110 transition-transform"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards */}
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        {/* Left Card (Prev) */}
                        <motion.div
                            key={visibleItems[0].key}
                            layoutId={visibleItems[0].key} // Helps helps smoothly transition if possible, but manual position is better herewith generic keys
                            className="absolute w-[300px] md:w-[400px] p-8 -translate-x-1/2 bg-gray-50 rounded-2xl shadow-xl flex flex-col gap-4 items-center justify-center opacity-40 scale-75 blur-[1px] select-none pointer-events-none"
                            initial={{ x: -200, opacity: 0, scale: 0.6 }}
                            animate={{ x: -250, opacity: 0.5, scale: 0.8, zIndex: 10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Quote className="text-kairos-wine/20 w-8 h-8 self-start" />
                            <p className="text-gray-600 italic line-clamp-3">"{visibleItems[0].text}"</p>
                            <div className="font-bold text-gray-900">{visibleItems[0].name}</div>
                        </motion.div>

                        {/* Right Card (Next) */}
                        <motion.div
                            key={visibleItems[2].key}
                            className="absolute w-[300px] md:w-[400px] p-8 translate-x-1/2 bg-gray-50 rounded-2xl shadow-xl flex flex-col gap-4 items-center justify-center opacity-40 scale-75 blur-[1px] select-none pointer-events-none"
                            initial={{ x: 200, opacity: 0, scale: 0.6 }}
                            animate={{ x: 250, opacity: 0.5, scale: 0.8, zIndex: 10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Quote className="text-kairos-wine/20 w-8 h-8 self-start" />
                            <p className="text-gray-600 italic line-clamp-3">"{visibleItems[2].text}"</p>
                            <div className="font-bold text-gray-900">{visibleItems[2].name}</div>
                        </motion.div>

                        {/* Center Card (Active) */}
                        <motion.div
                            key={visibleItems[1].key}
                            className="absolute w-[320px] md:w-[500px] bg-white p-10 rounded-3xl shadow-2xl border-2 border-kairos-wine/5 flex flex-col gap-6 items-center z-30"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, x: 0, zIndex: 30 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="bg-kairos-wine/10 p-4 rounded-full">
                                <Quote className="text-kairos-wine w-8 h-8" />
                            </div>

                            <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
                                "{visibleItems[1].text}"
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-kairos-yellow text-kairos-yellow" />
                                ))}
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-gray-900">{visibleItems[1].name}</h4>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">{visibleItems[1].location}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
