import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function IntimatePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src="/images/category-intimate.png"
                    alt="Moda Íntima"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Moda Íntima</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Conforto e sensualidade que abraçam suas curvas.
                    </p>
                </div>
            </section>

            {/* Content Placeholder */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Coleção Completa</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <p className="text-gray-500 col-span-full text-center py-20 bg-gray-50 rounded-xl">
                        Produtos em breve...
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
