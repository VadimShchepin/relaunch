import Link from 'next/link'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

export default function NotFound() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />

            <main className="min-h-screen bg-[#F7F5F2] flex items-center justify-center">
                <div className="text-center px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[600px] mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                        Seite nicht gefunden
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Die gesuchte Seite existiert nicht oder wurde verschoben.
                    </p>
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Zur Startseite
                        </Link>
                        <div className="text-sm text-gray-500">
                            <Link href="/contact" className="underline hover:text-black">
                                Kontakt aufnehmen
                            </Link>
                            {' • '}
                            <Link href="/faq" className="underline hover:text-black">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}