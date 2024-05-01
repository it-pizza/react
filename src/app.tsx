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

function Success() {
    return (
        <div className="success">
            <h2 className="success__title">email confirm</h2>
            <p className="success__description">You've successfully logged in</p>
            <a href="#">go to home</a>
        </div>
    )
}

function Main() {
    return (
        <main>
            <section className="success">
                <h1 className="success__title">success</h1>
                <Success />
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