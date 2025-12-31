import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function DesignSystem() {
    return (
        <div className="min-h-screen p-8 space-y-12">
            <header className="flex items-center gap-4">
                <Link href="/" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <MoveLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold">Kairós Plus - Design System</h1>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Typography</h2>
                <div className="space-y-4 border p-6 rounded-xl">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Heading (Poppins Bold)</p>
                        <h1 className="text-4xl font-bold">The quick brown fox jumps over the lazy dog</h1>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Body (Poppins Regular)</p>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Accent (Dancing Script)</p>
                        <p className="font-cursive text-4xl text-kairos-wine">Elegant details & moments</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        <div className="h-24 rounded-lg bg-kairos-gradient"></div>
                        <p className="font-medium">Primary Gradient</p>
                        <p className="text-xs text-gray-500">Sky 400 → Cyan 400</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 rounded-lg bg-kairos-wine"></div>
                        <p className="font-medium">Secondary (Wine)</p>
                        <p className="text-xs text-gray-500">#722F37</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 rounded-lg bg-gray-50 border"></div>
                        <p className="font-medium">Background Light</p>
                        <p className="text-xs text-gray-500">#ffffff / #f9fafb</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-24 rounded-lg bg-gray-900"></div>
                        <p className="font-medium">Text Dark</p>
                        <p className="text-xs text-gray-500">#171717</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Buttons & UI</h2>
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-kairos-wine text-white rounded-lg hover:bg-[#5a252c] transition shadow-lg font-medium">
                        Primary Action
                    </button>
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-50 transition font-medium">
                        Secondary Action
                    </button>
                    <button className="px-6 py-3 bg-kairos-gradient text-white rounded-lg shadow-lg font-medium hover:opacity-90 transition">
                        Gradient Button
                    </button>
                </div>
            </section>
        </div>
    );
}
