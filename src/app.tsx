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

interface IPostControlButton {
    className: string
}

function PostControlButton(props: IPostControlButton) {
    return (
        <button className={props.className}></button>
    )
}

function PostControlPanel() {
    return (
        <div className="post__control-panel">
            <PostControlButton className="post__control-button like"/>
            <PostControlButton className="post__control-button dislike"/>
            <PostControlButton className="post__control-button fix"/>
            <PostControlButton className="post__control-button other"/>
        </div>
    )
}

function LargePost() {
    return (
        <div className="post large">
            <PostImage/>
            <PostContent/>
            <PostControlPanel/>
        </div>
    )
}

function MediumPost() {
    return (
        <div className="post medium">
            <PostImage/>
            <PostContent/>
            <PostControlPanel/>
        </div>
    )
}

function SmallPost() {
    return (
        <div className="post small">
            <PostImage/>
            <PostContent/>
            <PostControlPanel/>
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
