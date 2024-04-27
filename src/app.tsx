function LargePost() {
    return (
        <div className="post large"></div>
    )
}

function MediumPost() {
    return (
        <div className="post medium"></div>
    )
}

function SmallPost() {
    return (
        <div className="post small"></div>
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
