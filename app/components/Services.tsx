import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const differentials = [
    {
        id: 1,
        title: "Fabricação Própria",
        description: "Controle total de qualidade em cada etapa do processo, garantindo excelência do fio à peça final.",
        icon: "/images/icon-manufacturing.png",
    },
    {
        id: 2,
        title: "Modelagem Especial",
        description: "Nossas peças são desenhadas pensando em corpos reais, oferecendo conforto e valorizando suas curvas naturais.",
        icon: "/images/icon-tailor.png",
    },
    {
        id: 3,
        title: "Variedade para Todos",
        description: "Uma linha completa de Moda Masculina, Feminina e Infantil para vestir toda a família com estilo.",
        icon: "/images/icon-variety.png",
    },
];

export default function Services() {
    return (
        <section id="differentials" className="py-24 bg-white relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column - Sticky Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                        <FadeIn>
                            <span className="text-kairos-wine font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-kairos-wine"></span>
                                Por que escolher a Kairós?
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Diferenciais que fazem a <span className="font-cursive text-6xl text-kairos-wine block mt-2">Diferença</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Não vendemos apenas roupas, entregamos autoestima, conforto e qualidade que você pode sentir na pele.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Column - List of Features */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {differentials.map((item, index) => (
                            <FadeIn key={item.id} delay={index * 0.2}>
                                <div className="group bg-gray-50 hover:bg-white p-8 rounded-3xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8">

                                    {/* Icon Box */}
                                    <div className="shrink-0 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-kairos-wine/5 group-hover:bg-kairos-wine/10 transition-colors" />
                                        <div className="relative w-14 h-14">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left space-y-3">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-kairos-wine transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {item.description}
                                        </p>

                                        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 flex items-center gap-2 text-kairos-wine font-medium text-sm">
                                            <CheckCircle2 size={16} />
                                            <span>Garantia de Qualidade</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
