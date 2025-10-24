import { useState, useEffect } from 'react'
import App from './App'
import Impressum from './Impressum'
import Datenschutz from './Datenschutz'

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Normalize path by removing the leading #
  const path = currentPath.replace('#', '')

  switch (path) {
    case '/impressum':
      return <Impressum />
    case '/datenschutz':
      return <Datenschutz />
    default:
      return <App />
  }
}

export default Router
