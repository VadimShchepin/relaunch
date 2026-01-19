export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Lädt...</p>
            </div>
        </div>
    )
}