import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import FadeIn from "./ui/FadeIn";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="space-y-4 flex items-center gap-4 flex-col md:flex-col">
                            <Link href="/" className="inline-block">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-sm hover:scale-105 transition-transform flex items-center justify-center p-1">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Kairós Plus Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed md:text-center">
                                Moda inclusiva que celebra todos os corpos. Conforto, estilo e confiança em cada peça.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Navegação</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="#hero" className="hover:text-kairos-wine transition-colors">Início</Link></li>
                                <li><Link href="#about" className="hover:text-kairos-wine transition-colors">Sobre Nós</Link></li>
                                <li><Link href="#differentials" className="hover:text-kairos-wine transition-colors">Diferenciais</Link></li>
                                <li><Link href="#categories" className="hover:text-kairos-wine transition-colors">Coleções</Link></li>
                                <li><Link href="#testimonials" className="hover:text-kairos-wine transition-colors">Depoimentos</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contato</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>WhatsApp: (11) 99999-9999</li>
                                <li>Email: contato@kairosplus.com</li>
                                <li>São Paulo, SP</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Fique por dentro</h3>
                            <p className="text-gray-400 text-sm mb-4">Receba novidades e ofertas exclusivas.</p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Seu email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-kairos-wine"
                                />
                                <button className="bg-kairos-wine px-4 py-2 rounded-lg hover:bg-white hover:text-kairos-wine transition-colors">
                                    Ok
                                </button>
                            </form>
                        </div>
                    </div>
                </FadeIn>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kairós Plus. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
