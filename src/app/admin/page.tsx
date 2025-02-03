'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdate = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="System Status">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>All systems operational</span>
            </div>
          </Card>
          
          <Card title="Actions">
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className={`btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Updating...' : 'Update System'}
            </button>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}