import { motion } from 'framer-motion'

function InfiniteMarquee({ speed = 50, children }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-8 whitespace-nowrap will-change-transform" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {children}
        {children}
        {children}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  )
}

export default function Research(){
  const items = Array.from({length:12}).map((_,i)=> `Paper ${i+1}: Self-Reflective Transformers`)
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-950 text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-medium">Research</h1>
        <p className="text-white/70 mt-3 max-w-2xl">Explorations at the edge of cognition, perception and collective intelligence.</p>
      </div>
      <div className="mt-12 space-y-6">
        {[1,2,3].map((row)=> (
          <InfiniteMarquee key={row} speed={30+row*10}>
            {items.map((t, i)=> (
              <motion.div whileHover={{scale:1.05}} key={row+'-'+i} className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
                {t}
              </motion.div>
            ))}
          </InfiniteMarquee>
        ))}
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {Array.from({length:8}).map((_,i)=> (
          <motion.div key={i} whileHover={{y:-4}} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-medium">Prototype #{i+1}</h3>
            <p className="text-white/70 mt-2">A looping experiment that never ends: scroll to see the patterns mutate.</p>
          </motion.div>
        ))}
      </div>

      <div className="h-[30vh]"></div>
    </div>
  )
}
