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
            <section className="signIn">
                <h1>sign in</h1>
            </section>
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