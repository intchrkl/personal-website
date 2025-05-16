// import { Header } from "./components/header/Header"
import { Navbar } from "./components/navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { TitleManager } from "./components/titleManager/TitleManager"

export function Layout() {
    return (
        <>
            <TitleManager/>
            {/* <Header/> */}
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>           
        </>
    )
}