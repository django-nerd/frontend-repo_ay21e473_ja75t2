import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 pointer-events-none">
        <div className="pt-28 pb-20 max-w-7xl mx-auto px-6">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl sm:text-7xl font-medium tracking-tight">
            Building the Infinite Interface for AI
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0,delay:0.1}} className="mt-6 text-lg text-white/70 max-w-2xl">
            We craft products that loop forward—systems that learn, adapt and expand without end.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
          {["Reasoning", "Generation", "Agents"].map((t,i)=> (
            <motion.div whileHover={{scale:1.02, rotate:0.2}} key={t} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur pointer-events-auto">
              <h3 className="text-xl font-medium">{t}</h3>
              <p className="mt-2 text-white/70">Interactive sandboxes that respond to your cursor and thought.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
