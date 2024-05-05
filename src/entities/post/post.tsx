import { useEffect, useState } from "react"
import { fetchData } from "../../shared/index.ts"
import { PostsFetchUrl } from "../../app/constants.ts"
import { PostContext } from "./context.tsx"
import { PostContent } from "./content.tsx"

export interface IPostFetchData {
    "id": 0,
    "image": "string",
    "text": "string",
    "date": "2024-05-04",
    "lesson_num": 0,
    "title": "string",
    "description": "string",
    "author": 0
  }

interface IPostData {
    data: IPostFetchData
}

function LargePost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-large">
                <img src={props.data.image} alt="" />
                <PostContent />
            </div>
        </PostContext>
    )
}

function MediumPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-large">
                <img src={props.data.image} alt="" />
                <PostContent />
            </div>
        </PostContext>
    )
}

function SmallPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-large">
                <img src={props.data.image} alt="" />
                <PostContent />
            </div>
        </PostContext>
    )
}

interface IPost {
    id: string | number
    size: 'large' | 'medium' | 'small'
}

export function Post(props: IPost) {
    const [postData, setPostData] = useState<IPostFetchData>()
    const url = `${PostsFetchUrl}/blog/posts/${props.id}`

    useEffect(() => {
        fetchData(url).then((data) => {
            setPostData(data)
        })
    }, [])
    
    if (props.size === 'large') {
        return <LargePost data={postData!} />
    } else if (props.size === 'medium') {
        return <MediumPost data={postData!} />
    } else {
        return <SmallPost data={postData!} />
    }
}