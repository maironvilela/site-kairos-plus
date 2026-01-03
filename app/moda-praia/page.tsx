'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const products = [
    {
        id: 'beach-1',
        title: 'Conjunto Beach Wear Premium',
        price: 'R$ 289,90',
        originalPrice: 'R$ 399,90',
        description: 'Conjunto exclusivo da nossa coleção de verão. Desenvolvido com tecido de alta tecnologia que oferece proteção UV e secagem rápida. O design moderno valoriza todos os tipos de corpos, garantindo conforto e estilo para seus dias de sol.',
        image: '/images/category-beach.png',
        video: '/videos/category-beach.mp4',
        sizes: ['P', 'M', 'G', 'GG', 'XG'],
        measurements: [
            { size: 'P', bust: '82-86', waist: '64-68', hip: '90-94' },
            { size: 'M', bust: '87-91', waist: '69-73', hip: '95-99' },
            { size: 'G', bust: '92-96', waist: '74-78', hip: '100-104' },
            { size: 'GG', bust: '97-101', waist: '79-83', hip: '105-109' },
            { size: 'XG', bust: '102-106', waist: '84-88', hip: '110-114' },
        ]
    },
    {
        id: 'beach-2',
        title: 'Saída de Praia Zebra',
        price: 'R$ 189,90',
        originalPrice: 'R$ 259,90',
        description: 'Elegância e leveza definem esta saída de praia com estampa de zebra. Perfeita para complementar seu look de verão com sofisticação.',
        image: '/images/saida-praia-zebra-model.png',
        video: '/videos/saida-praia-zebra-model.mp4',
        sizes: ['P', 'M', 'G', 'GG'],
        measurements: [
            { size: 'P', bust: '82-86', waist: '64-68', hip: '90-94' },
            { size: 'M', bust: '87-91', waist: '69-73', hip: '95-99' },
            { size: 'G', bust: '92-96', waist: '74-78', hip: '100-104' },
            { size: 'GG', bust: '97-101', waist: '79-83', hip: '105-109' },
        ]
    }
];

export default function BeachPage() {
    const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src="/images/category-beach.png"
                    alt="Moda Praia"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Moda Praia</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Estilo e segurança para curtir cada momento de sol.
                    </p>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Destaque da Coleção</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-kairos-wine text-white text-sm font-bold px-3 py-1 rounded-full">
                                    Oferta
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2 text-kairos-wine">{product.title}</h3>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                                    <span className="text-xl font-bold text-kairos-wine">{product.price}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="w-full mt-4 py-2 border border-kairos-wine text-kairos-wine rounded-full hover:bg-kairos-wine hover:text-white transition-colors"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 p-2 bg-white/80 rounded-full transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Media Section (Video or Image) */}
                                <div className="p-6">
                                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
                                        {selectedProduct.video ? (
                                            <video
                                                controls
                                                autoPlay
                                                muted
                                                className="w-full h-full object-cover"
                                                poster={selectedProduct.image}
                                            >
                                                <source src={selectedProduct.video} type="video/mp4" />
                                                Seu navegador não suporta o elemento de vídeo.
                                            </video>
                                        ) : (
                                            <Image
                                                src={selectedProduct.image}
                                                alt={selectedProduct.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-kairos-wine mb-2">{selectedProduct.title}</h3>
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="text-gray-400 line-through text-lg">{selectedProduct.originalPrice}</span>
                                        <span className="text-3xl font-bold text-kairos-wine">{selectedProduct.price}</span>
                                    </div>

                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {selectedProduct.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-4">Tabela de Medidas (cm)</h4>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-center">
                                                <thead className="bg-gray-50 text-gray-700">
                                                    <tr>
                                                        <th className="p-2 rounded-tl-lg">Tam</th>
                                                        <th className="p-2">Busto</th>
                                                        <th className="p-2">Cintura</th>
                                                        <th className="p-2 rounded-tr-lg">Quadril</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {selectedProduct.measurements.map((m) => (
                                                        <tr key={m.size} className="hover:bg-gray-50/50">
                                                            <td className="p-2 font-medium text-kairos-wine">{m.size}</td>
                                                            <td className="p-2 text-gray-600">{m.bust}</td>
                                                            <td className="p-2 text-gray-600">{m.waist}</td>
                                                            <td className="p-2 text-gray-600">{m.hip}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-3">Tamanhos Disponíveis:</h4>
                                        <div className="flex gap-2">
                                            {selectedProduct.sizes.map(size => (
                                                <button key={size} className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-gray-600 hover:border-kairos-wine hover:text-kairos-wine cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-kairos-wine/50">
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-kairos-wine text-white rounded-full font-bold hover:bg-kairos-wine/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        Adicionar à Sacola
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
