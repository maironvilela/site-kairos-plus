"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar({ simple = false }: { simple?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is near top but not too early
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const targetId = link.href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "Coleções", href: "#categories" },
        { name: "Sobre Nós", href: "#about" },
        { name: "Diferenciais", href: "#differentials" },
        { name: "Promoções", href: "#promocoes" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Nossa Loja", href: "#location" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (pathname === "/") {
            e.preventDefault();
            const targetId = href.replace(/.*\#/, "");
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-kairos-wine/20 bg-white shadow-sm hover:scale-105 transition-transform">
                        <Image
                            src="/images/logo.png"
                            alt="Kairós Plus Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Link>

                {!simple && (
                    <>
                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`text-gray-700 hover:text-kairos-wine font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-kairos-wine after:transition-all ${pathname === "/" && activeSection === link.href.replace("#", "") ? "text-kairos-wine after:w-full" : "after:w-0 hover:after:w-full"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-gray-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </>
                )}
            </div>

            {/* Mobile Menu */}
            {
                !simple && isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                                className={`text-lg font-medium py-2 border-b border-gray-50 ${pathname === "/" && activeSection === link.href.replace("#", "") ? "text-kairos-wine" : "text-gray-800 hover:text-kairos-wine"
                                    }`}
                                onClick={(e) => {
                                    handleScroll(e, link.href);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                )
            }
        </nav >
    );
}
