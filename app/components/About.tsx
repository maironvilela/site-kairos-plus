"use client";

import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24 bg-kairos-sand-mix relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <FadeIn direction="right">
                        <div className="space-y-6">
                            <span className="text-kairos-wine font-semibold uppercase tracking-wider text-sm">
                                Sobre Nós
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Mais que moda, uma história de <span className="font-cursive text-5xl text-kairos-wine">Amor e Inclusão</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    A <strong className="text-kairos-wine">Kairós Plus</strong> nasceu de um sonho: criar uma moda que não apenas vestisse, mas abraçasse. Percebemos que o mercado precisava de mais do que apenas tamanhos maiores; precisava de modelagem real, pensada para valorizar cada curva.
                                </p>
                                <p>
                                    Com fabricação própria e um olhar atento a cada costura, nossas peças são desenvolvidas para oferecer o equilíbrio perfeito entre elegância e conforto. Acreditamos que a beleza não tem padrão, e nossa missão é fazer você se sentir incrível em sua própria pele.
                                </p>
                                <p>
                                    Do nosso ateliê para sua casa, cada peça carrega o carinho e a dedicação de quem ama o que faz.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    href="#categories"
                                    className="inline-block px-8 py-3 bg-kairos-wine text-white rounded-full font-medium hover:bg-[#5a252c] transition-all hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    Conheça Nossas Peças
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Image Content */}
                    <FadeIn direction="left">
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/hero-work.png"
                                alt="Kairós Plus Atelier e Estilo"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-kairos-wine/60 to-transparent mix-blend-multiply opacity-60"></div>

                            {/* Badge */}
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 max-w-xs hidden md:block">
                                <p className="font-cursive text-3xl text-kairos-wine mb-2">Desde 2020</p>
                                <p className="text-gray-700 text-sm">Transformando autoestima através da moda inclusiva.</p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
