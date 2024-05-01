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

function Form() {
    return (
        <form method="get" className="signIn__form">
            <div className="signIn__form-input">
                <label htmlFor="signIn__form-email" className="signIn__form-label">Email:</label>
                <input type="email" id="signIn__form-email" name="email" placeholder="Email" />
            </div>
            <div className="signIn__form-input">
                <label htmlFor="signIn__form-password" className="signIn__form-label">Password:</label>
                <input type="password" id="signIn__form-password" name="password" placeholder="Password" />
            </div>
            <a href="#">Forgot password?</a>
            <button type="submit" className="signIn__form-button">Sign in</button>
            <p className="signIn__create-account">Don't have as account? <a href="#">Sign Up</a></p>
        </form>
    )
}

function Main() {
    return (
        <main>
            <section className="signIn">
                <h1 className="signIn__title">sign in</h1>
                <Form />
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