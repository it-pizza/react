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

function Main() {
    return (
        <main>
            
        </main>
    )
}

export function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}