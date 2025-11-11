import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Gallery(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end end"] })
  const rotate = useTransform(scrollYProgress, [0,1], [0, 360])

  return (
    <div ref={ref} className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-medium">Work</h1>
        <p className="text-white/70 mt-3 max-w-2xl">A living archive of products, prototypes and brand systems we crafted.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({length:18}).map((_,i)=> (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            <div className="aspect-[4/3]">
              <motion.div style={{ rotate }} className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-fuchsia-500/10" />
            </div>
            <div className="p-4">
              <h3 className="text-lg">Startup #{i+1}</h3>
              <p className="text-white/70 text-sm">AI-first experience — brand, product and launch.</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-[30vh]"></div>
    </div>
  )
}
