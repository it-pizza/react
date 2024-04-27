function PostImage() {
    return (
        <img src="#" className="post__img"></img>
    )
}

function PostDate() {
    return (
        <p className="post__date"></p>
    )
}

function PostTitle() {
    return (
        <h3 className="post__title"></h3>
    )
}

function PostDescription() {
    return (
        <p className="post__description"></p>
    )
}

function PostContent() {
    return (
        <div className="post__content">
            <PostDate/>
            <PostTitle/>
            <PostDescription/>
        </div>
    )
}

function LargePost() {
    return (
        <div className="post large">
            <PostImage/>
            <PostContent/>
        </div>
    )
}

function MediumPost() {
    return (
        <div className="post medium">
            <PostImage/>
            <PostContent/>
        </div>
    )
}

function SmallPost() {
    return (
        <div className="post small">
            <PostImage/>
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
        return <LargePost/>
    } else if (props.size === "medium") {
        return <MediumPost/>
    } else {
        return <SmallPost/>
    }
}

export function App() {
    return (<></>)
}
