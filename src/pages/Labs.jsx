import { motion } from 'framer-motion'

export default function Labs(){
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-medium">Labs</h1>
        <p className="text-white/70 mt-3 max-w-2xl">Touch the interfaces. Every card below is an instrument: drag, hover, click.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {Array.from({length:9}).map((_,i)=> (
            <InteractiveModule key={i} idx={i}/>
          ))}
        </div>
      </div>
      <div className="h-[30vh]"></div>
    </div>
  )
}

function InteractiveModule({ idx }){
  return (
    <motion.div
      drag
      dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10 backdrop-blur overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute -right-16 -bottom-16 w-52 h-52 rounded-full bg-violet-500/10 border border-violet-400/20"
      />
      <h3 className="text-xl font-medium">Agent {idx+1}</h3>
      <p className="text-white/70 mt-2">An emergent tool that refactors itself when you play with it.</p>
      <button className="mt-4 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">Spawn</button>
    </motion.div>
  )
}
