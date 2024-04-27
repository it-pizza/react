interface IPostData {
    id: number
    size: "large" | "medium" | "small"
}

function Post(props: IPostData) {
    if (props.size === "large") {
        return 
    } else if (props.size === "medium") {
        return 
    } else {
        return
    }
}

export function App() {
    return (<></>)
}
