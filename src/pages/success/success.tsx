import { Link } from "react-router-dom";
import { Header } from "../../widgets";

export function SuccessPage() {
    return (
        <>
            <Header />
            <section className="success">
                <div className="success__confirmed">
                    <h2>Email Confirmed</h2>
                    <Link to="/posts">Go to home</Link>
                </div>
            </section>
        </>
    )
}