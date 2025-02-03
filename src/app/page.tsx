import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Political Ultra Analytics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Link 
          href="/dashboard"
          className="p-6 border border-gray-700 rounded-lg hover:border-purple-500 transition-all"
        >
          <h2 className="text-2xl font-semibold mb-2">Dashboard →</h2>
          <p>Visualiza datos en tiempo real con análisis avanzado.</p>
        </Link>
        <Link
          href="/analytics"
          className="p-6 border border-gray-700 rounded-lg hover:border-pink-500 transition-all"
        >
          <h2 className="text-2xl font-semibold mb-2">Analytics →</h2>
          <p>Métricas detalladas y predicciones basadas en IA.</p>
        </Link>
      </div>
    </div>
  )
}