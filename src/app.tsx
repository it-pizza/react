import { useEffect, useState } from "react"

interface IPostImage {
    image: string
}

function PostImage(props: IPostImage) {
    return (
        <img src={props.image} className="post__img"></img>
    )
}

interface IPostDate {
    date: string
}

function PostDate(props: IPostDate) {
    return (
        <p className="post__date">{props.date}</p>
    )
}

interface IPostTitle {
    title: string
}

function PostTitle(props: IPostTitle) {
    return (
        <h3 className="post__title">{props.title}</h3>
    )
}

interface IPostDescription {
    description: string
}

function PostDescription(props: IPostDescription) {
    return (
        <p className="post__description">{props.description}</p>
    )
}

function PostContent(props: IPostAttribute) {
    return (
        <div className="post__content">
            <PostDate date={props.data.date}/>
            <PostTitle title={props.data.title}/>
            <PostDescription description={props.data.text}/>
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

interface IPostAttribute {
    data: IFetchPost
}

function LargePost(props: IPostAttribute) {
    if (!props.data) { return null }
    return (
        <div className="post large">
            <PostImage image={props.data.image}/>
            <PostContent data={props.data}/>
            <PostControlPanel/>
        </div>
    )
}

function MediumPost(props: IPostAttribute) {
    if (!props.data) { return null }
    return (
        <div className="post medium">
            <PostImage image={props.data.image}/>
            <PostContent data={props.data}/>
            <PostControlPanel/>
        </div>
    )
}

function SmallPost(props: IPostAttribute) {
    if (!props.data) { return null }
    return (
        <div className="post small">
            <PostImage image={props.data.image}/>
            <PostContent data={props.data}/>
            <PostControlPanel/>
        </div>
    )
}

interface IFetchPost {
    "id": number
    "image": string
    "text": string
    "date": string
    "lesson_num": number
    "title": string
    "author": number
}

function fetchPost(id: string | number): Promise<IFetchPost> {
    const url = "https://studapi.teachmeskills.by"
    return fetch(`${url}/blog/posts/${id}/`)
        .then(res => res.json())
        .catch(error => console.error(error))
}

interface IPostData {
    id: number
    size: "large" | "medium" | "small"
}

function Post(props: IPostData) {
    const [usePostData, setUsePostData] = useState<IFetchPost>()

    useEffect(() => {
        fetchPost(props.id).then(data => setUsePostData(data))
    }, [])

    if (props.size === "large") {
        return <LargePost data={usePostData!}/>
    } else if (props.size === "medium") {
        return <MediumPost data={usePostData!}/>
    } else {
        return <SmallPost data={usePostData!}/>
    }
}

export function App() {
    return (<Post size="large" id={10}/>)
}
