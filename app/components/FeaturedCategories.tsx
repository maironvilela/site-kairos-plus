"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: "intimate",
        title: "Moda Íntima",
        description: "Conforto e sensualidade para o dia a dia.",
        image: "/images/category-intimate.png",
        link: "/moda-intima",
    },
    {
        id: "beach",
        title: "Moda Praia",
        description: "Estilo e segurança para curtir o sol.",
        image: "/images/category-beach.png",
        link: "/moda-praia",
    },
    {
        id: "fitness",
        title: "Moda Fitness",
        description: "Liberdade de movimento para seus treinos.",
        image: "/images/category-fitness.png",
        link: "/moda-fitness",
    },
];

import FadeIn from "./ui/FadeIn";

export default function FeaturedCategories() {
    return (
        <section id="categories" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-kairos-wine font-semibold uppercase tracking-wider text-sm">
                            Nossas Coleções
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Categorias em <span className="font-cursive text-5xl text-kairos-wine">Destaque</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <FadeIn key={cat.id} delay={index * 0.2} fullWidth>
                            <Link
                                href={cat.link}
                                className="group relative block h-[500px] overflow-hidden rounded-3xl shadow-lg"
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                                    <p className="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {cat.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-kairos-blue-end transition-colors">
                                        Ver Coleção
                                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
