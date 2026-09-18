import { useEffect, useRef, useState } from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'

const getRoute = () => window.location.pathname.replace(/\/+$/, '') || '/'

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const pendingHash = useRef(null)
  const firstRender = useRef(true)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const hash = pendingHash.current
    pendingHash.current = null

    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [route])

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = event.target.closest('a')
      if (!anchor || anchor.hasAttribute('download')) return
      if (anchor.target && anchor.target !== '_self') return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return

      const path = url.pathname.replace(/\/+$/, '') || '/'
      const isHashOnly = (anchor.getAttribute('href') ?? '').startsWith('#')

      if (isHashOnly) {
        if (route === '/') return

        event.preventDefault()
        pendingHash.current = url.hash
        window.history.pushState({}, '', `/${url.hash}`)
        setRoute('/')
        return
      }

      if (path !== '/' && path !== '/contact') return

      event.preventDefault()
      if (url.hash) pendingHash.current = url.hash
      window.history.pushState({}, '', `${path}${url.hash}`)
      setRoute(path)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [route])

  return route === '/contact' ? <Contact /> : <Home />
}
