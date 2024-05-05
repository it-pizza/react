import { Post } from "../../entities/post/post.tsx";
import { Header } from "../../widgets/index.ts";

export function PostsPage() {
    return (
        <>
            <Header /> {/* Я только в конце понял что не правильно собрал header */}
            <main>
                <section className="posts">
                    <Post id={10} size="large" />
                </section>
            </main>
        </>
    )
}