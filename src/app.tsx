function Menu() {
    return (
        <nav className="header-burger">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"></input>
        </nav>
    )
}

function Header() {
    return (
        <header className="header">
            <Menu />
            <h2>Website - Homework</h2>
        </header>
    )
}

export function App() {
    return (
        <>
            <Header />
        </>
    )
}