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

  // Create an actually infinite feel by recycling content blocks vertically
  useEffect(()=>{
    const el = containerRef.current
    if(!el) return

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      if (scrollTop < 1000) {
        el.scrollTop = scrollTop + (scrollHeight/2)
      } else if (scrollTop + clientHeight > scrollHeight - 1000) {
        el.scrollTop = scrollTop - (scrollHeight/2)
      }
    }

    // Duplicate content to create a tall loop
    const content = el.firstChild
    if(content){
      const clone = content.cloneNode(true)
      const clone2 = content.cloneNode(true)
      el.appendChild(clone)
      el.appendChild(clone2)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    el.scrollTop = (el.scrollHeight/2) - 1
    return () => el.removeEventListener('scroll', onScroll)
  },[])

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      <div className="min-h-[200vh]">
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
