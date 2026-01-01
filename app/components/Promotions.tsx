'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const promotions = [
    {
        id: 1,
        title: 'Conjunto Verão 2025',
        originalPrice: 'R$ 299,90',
        price: 'R$ 199,90',
        discount: '33% OFF',
        image: 'https://placehold.co/600x800/png?text=Moda+Verao',
    },
    {
        id: 2,
        title: 'Vestido Floral Midi',
        originalPrice: 'R$ 359,90',
        price: 'R$ 249,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Vestido+Floral',
    },
    {
        id: 3,
        title: 'Blusa de Linho Premium',
        originalPrice: 'R$ 189,90',
        price: 'R$ 129,90',
        discount: '32% OFF',
        image: 'https://placehold.co/600x800/png?text=Blusa+Linho',
    },
    {
        id: 4,
        title: 'Calça Alfaiataria',
        originalPrice: 'R$ 259,90',
        price: 'R$ 179,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Calca+Alfaiataria',
    },
    {
        id: 5,
        title: 'Saia Plissada',
        originalPrice: 'R$ 199,90',
        price: 'R$ 139,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Saia+Plissada',
    },
    {
        id: 6,
        title: 'Blazer Casual',
        originalPrice: 'R$ 399,90',
        price: 'R$ 279,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Blazer+Casual',
    },
    {
        id: 7,
        title: 'Vestido Longo Festa',
        originalPrice: 'R$ 499,90',
        price: 'R$ 349,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Vestido+Longo',
    },
    {
        id: 8,
        title: 'Camisa Social Seda',
        originalPrice: 'R$ 229,90',
        price: 'R$ 159,90',
        discount: '30% OFF',
        image: 'https://placehold.co/600x800/png?text=Camisa+Seda',
    },
];

export default function Promotions() {
    const [selectedItem, setSelectedItem] = useState<(typeof promotions)[0] | null>(null);

    return (
        <section id="promocoes" className="py-20 bg-kairos-sand-mix">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-kairos-wine"
                    >
                        Promoções Exclusivas
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Aproveite nossos descontos especiais em peças selecionadas. Elegância e conforto com preços imperdíveis.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {promotions.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-kairos-wine text-white text-sm font-bold px-3 py-1 rounded-full">
                                    {item.discount}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2 text-kairos-wine">{item.title}</h3>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-gray-400 line-through text-sm">{item.originalPrice}</span>
                                    <span className="text-xl font-bold text-kairos-wine">{item.price}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="w-full mt-4 py-2 border border-kairos-wine text-kairos-wine rounded-full hover:bg-kairos-wine hover:text-white transition-colors"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/promocoes"
                        className="inline-flex items-center justify-center px-8 py-3 bg-kairos-wine text-white rounded-full font-semibold hover:bg-kairos-wine/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Ver todas as Promoções
                    </Link>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 rounded-full p-1 z-10 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="relative h-64 md:h-80">
                                <Image
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-kairos-wine text-white text-sm font-bold px-3 py-1 rounded-full">
                                    {selectedItem.discount}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-kairos-wine mb-2">{selectedItem.title}</h3>

                                <div className="flex items-baseline gap-3 mb-4">
                                    <span className="text-gray-400 line-through">{selectedItem.originalPrice}</span>
                                    <span className="text-2xl font-bold text-kairos-wine">{selectedItem.price}</span>
                                </div>

                                <p className="text-gray-600 mb-6">
                                    Peça exclusiva com acabamento premium, perfeita para compor looks elegantes e confortáveis.
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Tamanhos Disponíveis:</h4>
                                    <div className="flex gap-2">
                                        {['P', 'M', 'G', 'GG'].map(size => (
                                            <button key={size} className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm text-gray-600 hover:border-kairos-wine hover:text-kairos-wine cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-kairos-wine/50">
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-kairos-wine text-white rounded-full font-semibold hover:bg-kairos-wine/90 transition-colors shadow-lg cursor-not-allowed opacity-90">
                                    Em breve
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
