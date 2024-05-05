import { usePostContext } from "./context"

export function PostContent() {
    const postContext = usePostContext()

    return (
        <div className="post__content">
            <p className="post__content-date">{postContext?.date}</p>
            <h3 className="post__content-title">{postContext?.title}</h3>
            <p className="post__content-description">{postContext?.description}</p>
        </div>
    )
}