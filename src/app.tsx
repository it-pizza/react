function PostDate() {
    return (
        <div className="post__date"></div>
    )
}

function PostTitle() {
    return (
        <h3 className="post__title"></h3>
    )
}

function PostContent() {
    return (
        <div className="post__content">
            <PostDate/>
            <PostTitle/>
        </div>
    )
}

function LargePost() {
    return (
        <div className="post large">
            <PostContent/>
        </div>
    )
}

function MediumPost() {
    return (
        <div className="post medium">
            <PostContent/>
        </div>
    )
}

function SmallPost() {
    return (
        <div className="post small">
            <PostContent/>
        </div>
    )
}

interface IPostData {
    id: number
    size: "large" | "medium" | "small"
}

function Post(props: IPostData) {
    if (props.size === "large") {
        return LargePost()
    } else if (props.size === "medium") {
        return MediumPost()
    } else {
        return SmallPost()
    }
}

export function App() {
    return (<></>)
}
