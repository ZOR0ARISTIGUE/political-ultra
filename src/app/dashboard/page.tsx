'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Scene3D } from '@/components/3d/Scene3D'
import { AnalyticsChart } from '@/components/charts/AnalyticsChart'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Análisis en Tiempo Real">
              <AnalyticsChart />
            </Card>
            <Card title="Visualización 3D">
              <Scene3D />
            </Card>
            <Card title="Estadísticas">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Usuarios</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>Activos</span>
                  <span className="font-bold text-green-500">78%</span>
                </div>
              </div>
            </Card>
          </div>
        )}
      </motion.div>
    </div>
  )
}