import Image from "next/image";
import Link from "next/link";

export default function StoreLocation() {
    const address = "R. Expedicionário Diamantino do Nascimento, 145 - Pirajá, Belo Horizonte - MG, 31930-560";
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Info Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600">
                                Nossa Loja
                            </h2>
                            <div className="w-20 h-1.5 bg-linear-to-r from-purple-600 to-pink-600 rounded-full" />
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Venha nos visitar e conhecer de perto nossa coleção exclusiva.
                                Temos um espaço preparado com muito carinho para receber você.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                                    <p className="text-gray-600">{address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                                    <p className="text-gray-600">Segunda à Sexta: 09:00 - 18:00</p>
                                    <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-colors duration-300 gap-2"
                        >
                            <span>Traçar Rota</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Map Column */}
                    <div className="h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
                        <iframe
                            width="100%"
                            height="100%"
                            src={mapSrc}
                            title="Localização da Loja"
                            className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
