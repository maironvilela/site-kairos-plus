'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Sparkles } from 'lucide-react';

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center justify-center gap-8 p-4 text-center">
                <motion.div
                    className="relative"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Heart className="w-20 h-20 text-kairos-gold/20 absolute top-0 -left-16 transform -translate-x-1/2 rotate-12" />
                    <ShoppingBag className="w-32 h-32 text-kairos-wine relative z-10 drop-shadow-lg" strokeWidth={1.5} />
                    <Sparkles className="w-16 h-16 text-kairos-gold/40 absolute bottom-4 -right-12 transform translate-x-1/2" />
                </motion.div>

                <div className="space-y-3 mt-2">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-kairos-wine font-[family-name:var(--font-dancing-script)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Estamos nos Renovando
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Preparando uma experiência exclusiva para você.
                        <br />
                        <span className="text-kairos-wine font-semibold mt-1 block">Kairos Plus - Excelência em Moda Plus Size</span>
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col items-center justify-center gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="w-6 h-6 border-2 border-gray-100 border-t-kairos-wine rounded-full animate-spin"></div>
                    <p className="text-kairos-wine/60 text-xs font-medium tracking-[0.2em] uppercase">Carregando</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
