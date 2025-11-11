import { motion } from 'framer-motion'

export default function Founders(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-medium">Founders</h1>
        <p className="text-white/70 mt-3 max-w-2xl">Operators who prefer building to talking. We back founders who ship.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {['Ari','Mina','Kai'].map((n,i)=> (
            <motion.div key={n} whileHover={{y:-6}} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5" />
              <h3 className="text-xl mt-4">{n}</h3>
              <p className="text-white/70 text-sm">Builder-in-residence • {2023 + i}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-[30vh]"></div>
    </div>
  )
}
