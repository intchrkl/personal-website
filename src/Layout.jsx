import { Header } from "./components/header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { TitleManager } from "./components/titleManager/TitleManager"

export function Layout() {
    return (
        <>
            <TitleManager />
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}