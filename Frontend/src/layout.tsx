import { Outlet } from "@tanstack/react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Layout() {
  return (
    <div className="min-h-screen">
      <main>
        <Header/>
        <Outlet />  
        <Footer/>
      </main>
        
    </div>
  )
}
