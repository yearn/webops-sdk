import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout() {
  return <main className="relative w-full min-h-screen overflow-x-hidden">
    <div id="main-scroll" className="fixed inset-0 min-h-screen flex flex-col overflow-y-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </main>
}
