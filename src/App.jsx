import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import RightDock from './components/RightDock'
import Home from './pages/Home'
import Research from './pages/Research'
import Labs from './pages/Labs'
import Founders from './pages/Founders'
import Gallery from './pages/Gallery'

function InfiniteScrollWrapper({ children }){
  const containerRef = useRef(null)
  const blockRef = useRef(null)

  useEffect(()=>{
    const el = containerRef.current
    const block = blockRef.current
    if(!el || !block) return

    const getBlockHeight = () => block.getBoundingClientRect().height
    const threshold = 200 // px from edges to trigger reposition

    // Place scroll at the middle copy initially
    const init = () => {
      const h = getBlockHeight()
      el.scrollTop = h
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const h = getBlockHeight()
        const { scrollTop, clientHeight } = el
        const lowerBound = h - threshold
        const upperBound = h * 2 - clientHeight - threshold

        if (scrollTop < threshold) {
          // jumped too close to the start of first copy → move to same relative spot in second
          el.scrollTop = scrollTop + h
        } else if (scrollTop > upperBound) {
          // too close to end of second copy → move back by one block
          el.scrollTop = scrollTop - h
        }
        ticking = false
      })
    }

    init()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', init)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', init)
    }
  },[])

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black overscroll-none">
      {/* We render two copies of the content for seamless looping. */}
      <div ref={blockRef} className="min-h-[200vh]">
        {children}
      </div>
      <div className="min-h-[200vh]" aria-hidden>
        {children}
      </div>
    </div>
  )
}

export default function App(){
  const [openDock, setOpenDock] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    // close dock on route change
    setOpenDock(false)
  }, [location.pathname])

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar onOpenDock={() => setOpenDock(true)} />
      <RightDock open={openDock} onClose={() => setOpenDock(false)} />
      <div className="pt-16">
        <InfiniteScrollWrapper>
          <section className="snap-start">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/founders" element={<Founders />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </section>
        </InfiniteScrollWrapper>
      </div>

      <button onClick={()=> setOpenDock(true)} className="fixed right-4 bottom-6 md:bottom-8 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 shadow-lg backdrop-blur border border-white/10">Side Footer</button>
    </div>
  )
}
