import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RestoreScroll() {
  const { pathname } = useLocation()
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional, we want this to render whenever the route changes
  useEffect(() => {
    const scrollcontainer = document.getElementById('main-scroll')
    if (scrollcontainer) scrollcontainer.scrollTo(0, 0)
  }, [pathname])
  return null
}
