import {
  useState,
  useEffect,
  useRef
} from 'react'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)


  useEffect(() => {
    const topSentinel = document.getElementById('top-sentinel')
    if (!topSentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(topSentinel)
    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <header className={isSticky ? 'main_header scrolled' : 'main_header'}>
      <section className="header_logo">
        <h1 className="header_logo_text">Mi Portfolio</h1>
        <div className="header_logo_image">
          <img src="../assets/user.jpg" alt="Logo" />
        </div>
      </section>

      <nav className="header_nav">
        <ul>
          <li>
            <span className="barra"></span>
            <a href="#about">About</a></li>
          <li>
            <span className="barra"></span>
            <a href="#experience">Experience</a></li>
          <li>
            <span className="barra"></span>
            <a href="#projects">Projects</a></li>
          <li>
            <span className="barra"></span>
            <a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header