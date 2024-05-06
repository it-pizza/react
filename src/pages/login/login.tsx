import { Header, LoginForm } from "../../widgets";

export function LoginPage() {
    return (
        <>
            <Header />
            <section className="login">
                <LoginForm />
            </section>
        </>
    )
}