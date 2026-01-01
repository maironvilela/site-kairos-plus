import Link from "next/link";
import Image from "next/image";

export default function WhatsAppCta() {
    return (
        <section className="py-20 bg-linear-to-r from-green-50 to-emerald-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">

                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wide">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Grupo VIP Exclusivo
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Transforme seu guarda-roupa com <span className="text-green-600 font-cursive">Descontos Reais!</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Entre para o nosso grupo VIP no WhatsApp e receba ofertas relâmpago, cupons exclusivos e acesso antecipado aos lançamentos da Kairós Plus.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Ofertas exclusivas para membros",
                                "Aviso antecipado de lançamentos",
                                "Dicas de moda e estilo Plus Size"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href="https://chat.whatsapp.com/IO4zKzWpk82Ky3g69iNUkN" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                            <button className="px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-green-500/30 flex items-center gap-3 transform hover:-translate-y-1">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.09.597 2.007.95 2.806.95 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm6.768 5.767c-.001 3.756-3.029 6.785-6.768 6.785-.894 0-1.996-.289-3.418-.949l-3.238.851.868-3.153c-.76-1.503-1.155-2.576-1.155-3.534.001-3.756 3.029-6.785 6.768-6.785 3.743.001 6.772 3.029 6.772 6.785h.171zm-9.153-1.897c-.126-.207-.466-.217-.678-.008-.669.66-1.077 1.487-1.077 1.838 0 .4.407 2.053 2.146 3.861 2.049 2.13 4.228 2.457 4.803 2.457.375 0 1.259-.517 1.428-1.033.17-.516.108-.94.02-1.085-.087-.145-.632-.387-.714-.428-.423-.211-2.193-1.026-2.315-1.033-.122-.007-.221.211-.476.516-.255.305-.441.228-.773.082-.333-.146-1.442-.647-2.433-1.509-.769-.669-1.057-1.166-1.258-1.527-.201-.362.247-.463.327-1.131z" />
                                </svg>
                                Entrar no Grupo VIP
                            </button>
                        </Link>
                    </div>

                    <div className="flex-1 relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 group cursor-pointer">
                        <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                        {/* Fake Play Button to Simulate Video */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-2 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Video Poster Image */}
                        <Image
                            src="/images/whatsapp-group-video-poster.png"
                            alt="Clientes felizes comprando pelo WhatsApp"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Overlay Card */}
                        <div className="absolute bottom-8 left-8 right-8 z-30">
                            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-green-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Compre com facilidade</p>
                                    <p className="text-xs text-gray-500">Veja como +500 clientes compram diariamente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>
    );
}
