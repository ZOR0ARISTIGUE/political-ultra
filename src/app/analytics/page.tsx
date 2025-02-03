'use client'
import { AnalyticsChart } from '@/components/charts/AnalyticsChart'
import { Scene3D } from '@/components/3d/Scene3D'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { DEPLOY_INFO } from '@/lib/utils'

export default function Analytics() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Tendencias">
            <AnalyticsChart />
          </Card>
          
          <Card title="Visualización 3D">
            <Scene3D />
          </Card>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>Deploy Date: {DEPLOY_INFO.date}</p>
          <p>Deploy User: {DEPLOY_INFO.user}</p>
          <p>Last Updated: {DEPLOY_INFO.timestamp}</p>
        </div>
      </motion.div>
    </div>
  )
}