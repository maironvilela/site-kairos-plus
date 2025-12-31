"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, Product } from "../data/catalog";
import { Filter, X, ArrowUp } from "lucide-react";

export default function CatalogPage() {
    const [selectedDepartment, setSelectedDepartment] = useState<string>("Todos");
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Get unique categories based on all products or selected department
    const categories = useMemo(() => {
        const filteredByDept = selectedDepartment === "Todos"
            ? products
            : products.filter(p => p.department === selectedDepartment);

        const cats = Array.from(new Set(filteredByDept.map(p => p.category)));
        return ["Todos", ...cats.sort()];
    }, [selectedDepartment]);

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchDept = selectedDepartment === "Todos" || product.department === selectedDepartment;
            const matchCat = selectedCategory === "Todos" || product.category === selectedCategory;
            return matchDept && matchCat;
        });
    }, [selectedDepartment, selectedCategory]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    // Scroll to top on filter change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedDepartment, selectedCategory]);

    // Handle scroll for Back to Top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle department change - reset category
    const handleDepartmentChange = (dept: string) => {
        setSelectedDepartment(dept);
        setSelectedCategory("Todos");
        setVisibleCount(6); // Reset pagination on filter change
    };

    return (
        <main className="min-h-screen bg-white relative">
            <Navbar />

            {/* Header */}
            <div className="pt-28 pb-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Catálogo <span className="text-kairos-wine font-cursive">Completo</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl">
                        Explore nossa coleção exclusiva de moda plus size.
                        Peças desenhadas para valorizar seu estilo e conforto.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Product Grid - Left Side */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-gray-600">
                                Mostrando <span className="font-bold text-gray-900">{visibleProducts.length}</span> de <span className="font-bold text-gray-900">{filteredProducts.length}</span> resultados
                            </p>
                        </div>

                        {visibleProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {visibleProducts.map(product => (
                                        <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {product.originalPrice && (
                                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                        OFERTA
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <p className="text-xs text-kairos-wine font-semibold uppercase mb-1">{product.department}</p>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate" title={product.title}>{product.title}</h3>

                                                <div className="flex items-baseline gap-2 mb-4">
                                                    {product.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">
                                                            R$ {product.originalPrice.toFixed(2)}
                                                        </span>
                                                    )}
                                                    <span className="text-xl font-bold text-gray-900">
                                                        R$ {product.price.toFixed(2)}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {product.sizes.map(size => (
                                                        <span key={size} className="text-xs border border-gray-200 rounded px-1.5 py-0.5 text-gray-500">
                                                            {size}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {visibleCount < filteredProducts.length && (
                                    <div className="mt-12 text-center">
                                        <button
                                            onClick={() => setVisibleCount(prev => prev + 6)}
                                            className="px-8 py-3 bg-white border border-kairos-wine text-kairos-wine rounded-full font-bold hover:bg-kairos-wine hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                        >
                                            Carregar Mais
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-3xl">
                                <p className="text-xl text-gray-500 mb-2">Nenhum produto encontrado</p>
                                <p className="text-gray-400">Tente limpar os filtros para ver mais opções.</p>
                                <button
                                    onClick={() => handleDepartmentChange("Todos")}
                                    className="mt-6 text-kairos-wine font-medium hover:underline"
                                >
                                    Limpar Filtros
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Filters Sidebar - Right Side */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-28 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Filter size={20} /> Filtros
                                </h3>

                                {/* Department Filter */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-700 mb-2">Departamento</h4>
                                    <div className="space-y-2">
                                        {["Todos", "Moda Feminina", "Moda Masculina", "Moda Infantil"].map(dept => (
                                            <label key={dept} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="department"
                                                    checked={selectedDepartment === dept}
                                                    onChange={() => handleDepartmentChange(dept)}
                                                    className="hidden"
                                                />
                                                <span className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${selectedDepartment === dept ? 'border-kairos-wine' : 'group-hover:border-kairos-wine'}`}>
                                                    {selectedDepartment === dept && <span className="w-2 h-2 rounded-full bg-kairos-wine" />}
                                                </span>
                                                <span className={`text-sm ${selectedDepartment === dept ? 'text-kairos-wine font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                                    {dept}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Categoria</h4>
                                    <div className="space-y-2">
                                        {categories.map(cat => (
                                            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    checked={selectedCategory === cat}
                                                    onChange={() => setSelectedCategory(cat)}
                                                    className="hidden"
                                                />
                                                <span className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${selectedCategory === cat ? 'border-kairos-wine' : 'group-hover:border-kairos-wine'}`}>
                                                    {selectedCategory === cat && <span className="w-2 h-2 rounded-full bg-kairos-wine" />}
                                                </span>
                                                <span className={`text-sm ${selectedCategory === cat ? 'text-kairos-wine font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                                    {cat}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6">
                        <button
                            onClick={() => setIsMobileFilterOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 font-medium"
                        >
                            <Filter size={18} /> Filtrar Produtos
                        </button>
                    </div>

                    {/* Mobile Filter Sheet */}
                    {isMobileFilterOpen && (
                        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setIsMobileFilterOpen(false)}>
                            <div
                                className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl overflow-y-auto"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
                                    <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 hover:text-gray-900">
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Mobile Filters Content (Same as Desktop) */}
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-3">Departamento</h4>
                                        <div className="space-y-3">
                                            {["Todos", "Moda Feminina", "Moda Masculina", "Moda Infantil"].map(dept => (
                                                <label key={dept} className="flex items-center gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="mobile-department"
                                                        checked={selectedDepartment === dept}
                                                        onChange={() => handleDepartmentChange(dept)}
                                                        className="w-5 h-5 text-kairos-wine focus:ring-kairos-wine"
                                                    />
                                                    <span className="text-gray-700">{dept}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-3">Categoria</h4>
                                        <div className="space-y-3">
                                            {categories.map(cat => (
                                                <label key={cat} className="flex items-center gap-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="mobile-category"
                                                        checked={selectedCategory === cat}
                                                        onChange={() => setSelectedCategory(cat)}
                                                        className="w-5 h-5 text-kairos-wine focus:ring-kairos-wine"
                                                    />
                                                    <span className="text-gray-700">{cat}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsMobileFilterOpen(false)}
                                        className="w-full py-3 bg-kairos-wine text-white rounded-full font-bold mt-8"
                                    >
                                        Ver Resultados
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-4 bg-kairos-wine text-white rounded-full shadow-lg hover:bg-kairos-wine/90 transition-all duration-300 z-40 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ArrowUp size={24} />
            </button>
        </main>
    );
}
