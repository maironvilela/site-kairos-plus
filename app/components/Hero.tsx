"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const heroImages = [
    {
      id: "all",
      src: "/images/hero-casual.png",
      alt: "Coleção Kairós Plus - Casual e Diversidade",
      label: "Todos",
    },
    {
      id: "beach",
      src: "/images/hero-beach.png",
      alt: "Moda Praia Plus Size",
      label: "Moda Praia",
    },
    {
      id: "fitness",
      src: "/images/hero-fitness.png",
      alt: "Moda Fitness Plus Size",
      label: "Fitness",
    },
    {
      id: "party",
      src: "/images/hero-party.png",
      alt: "Moda Festa Plus Size",
      label: "Festa",
    },
    {
      id: "work",
      src: "/images/hero-work.png",
      alt: "Moda Trabalho Plus Size",
      label: "Trabalho",
    },
    {
      id: "denim",
      src: "/images/hero-denim.png",
      alt: "Jeans Plus Size",
      label: "Jeans",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const activeImage = heroImages[activeIndex];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen pt-28 pb-12 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background Beach"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100">
            <span className="bg-kairos-gradient bg-clip-text text-transparent font-semibold tracking-wide text-sm uppercase">
              Especialistas em Tamanhos Especiais em BH
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Moda que abraça <br />
            suas <span className="text-kairos-wine font-cursive">Curvas</span>.
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Descubra roupas desenhadas para realçar sua beleza autêntica. Do fitness ao casual, encontre o ajuste perfeito com a elegância que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/catalogo">
              <button className="px-8 py-4 bg-kairos-gradient text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-200/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                Ver Coleção Completa
              </button>
            </Link>
            <Link href="https://wa.me/5531987205436" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-gray-800 border border-gray-200 text-lg font-medium rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-sm hover:shadow-md">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-green-600">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.09.597 2.007.95 2.806.95 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm6.768 5.767c-.001 3.756-3.029 6.785-6.768 6.785-.894 0-1.996-.289-3.418-.949l-3.238.851.868-3.153c-.76-1.503-1.155-2.576-1.155-3.534.001-3.756 3.029-6.785 6.768-6.785 3.743.001 6.772 3.029 6.772 6.785h.171zm-9.153-1.897c-.126-.207-.466-.217-.678-.008-.669.66-1.077 1.487-1.077 1.838 0 .4.407 2.053 2.146 3.861 2.049 2.13 4.228 2.457 4.803 2.457.375 0 1.259-.517 1.428-1.033.17-.516.108-.94.02-1.085-.087-.145-.632-.387-.714-.428-.423-.211-2.193-1.026-2.315-1.033-.122-.007-.221.211-.476.516-.255.305-.441.228-.773.082-.333-.146-1.442-.647-2.433-1.509-.769-.669-1.057-1.166-1.258-1.527-.201-.362.247-.463.327-1.131z" />
                </svg>
                Falar com Consultora
              </button>
            </Link>
          </div>
        </div>

        {/* Interactive Image Content */}
        <div className="relative flex flex-col items-center">
          {/* Main Image Container */}
          <div className="relative z-10 rounded-3xl overflow-visible shadow-2xl border-4 border-white h-[500px] w-full group mb-12 bg-white">
            {/* Image with Framer Motion Transition */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails Selection - Absolute Overlap */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-max max-w-[90vw] px-4">
              {heroImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => handleThumbnailClick(index)}
                  className={clsx(
                    "w-20 h-20 rounded-xl overflow-hidden border-4 shadow-lg transition-all duration-300 flex-shrink-0 relative bg-white",
                    activeImage.id === img.id
                      ? "border-kairos-wine scale-110 -translate-y-2 ring-2 ring-kairos-wine/20"
                      : "border-white opacity-90 hover:opacity-100 hover:scale-105"
                  )}
                  title={img.label}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Backdrops for image */}
          <div className="absolute top-10 right-10 w-full h-[500px] bg-kairos-wine/5 rounded-3xl -z-10 transform -rotate-2"></div>
        </div>
      </div>
    </section>
  );
}
