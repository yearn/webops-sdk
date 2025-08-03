import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return <main className="relative w-full min-h-screen flex flex-col">
    <Header />
    <div className="">
      <Outlet />
    </div>
    <footer className="px-8 py-6 flex items-center justify-end border-t border-primary-800 text-primary-800 bg-black/20">
      <a href="https://github.com/yearn/ycms" target="_blank" rel="noopener" className="flex items-center gap-2">
        https://github.com/yearn/ycms
      </a>
    </footer>
  </main>
}
