import { motion, AnimatePresence } from 'framer-motion'
import { X, Infinity, Github, Twitter, Sparkles } from 'lucide-react'

export default function RightDock({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-black/90 backdrop-blur border-l border-white/10 text-white overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Infinity className="w-5 h-5 text-violet-400" />
                <span className="font-medium">Infinity Dock</span>
              </div>
              <button onClick={onClose} className="p-2 rounded hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <section>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">About</h3>
                <p className="text-gray-300 leading-relaxed">
                  We build AI-first companies from zero to one. Our studio partners with technical founders to design, prototype and scale products that feel like magic.
                </p>
              </section>

              <section>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Resume</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>2025 — Launched Infinity Reasoner for autonomous research</li>
                  <li>2024 — Shipped VectorOS, a semantic desktop for teams</li>
                  <li>2023 — Exited SynthMail to a cloud provider</li>
                  <li>2022 — Incubated 7 AI startups across health, legal, finance</li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Work with Startups</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['NeuroMesh','AtlasML','Glyph','Helix','Nova','Kepler'].map((n,i)=> (
                    <motion.div
                      key={n}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="aspect-video rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-white/10 p-3 flex items-end"
                    >
                      <span className="text-xs text-white/90">{n}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Connect</h3>
                <div className="flex gap-3">
                  <a className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 inline-flex items-center gap-2" href="#"><Github className="w-4 h-4"/>Github</a>
                  <a className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 inline-flex items-center gap-2" href="#"><Twitter className="w-4 h-4"/>Twitter</a>
                </div>
              </section>

              <section>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Easter Egg</h3>
                <button onClick={()=> alert('∞')} className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4"/> Make it more infinite
                </button>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
