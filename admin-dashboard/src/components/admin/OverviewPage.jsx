import React from 'react'

import { motion } from "framer-motion"
import StatCard from "../common/StatCard";
import {Zap, Users} from 'lucide-react'
import Header from '../common/Header';

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Overview'/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

        {/* Stats */}
      <motion.div
      className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
      initial={{opacity: 0, y: 20}}
      animate={{opacity:1, y: 0 }}
      transition={{duration: 1 }}>

        <StatCard
        name= "Total Users" icon={Zap} value='' color='#6354f1'/>
        <StatCard
        name= "Total Users" icon={Users} value='' color='#8B5CF6'/>

      </motion.div>

      </main>


    </div>
  )
}

export default OverviewPage