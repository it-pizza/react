import { useEffect, useState } from "react"
import { fetchData } from "../../shared/index.ts"
import { PostsFetchUrl } from "../../app/constants.ts"
import { PostContext } from "./context.tsx"
import { PostContent } from "./content.tsx"
import { PostControl } from "../../features/post-control/post-control.tsx"
import "./post.scss"
import { PostImage } from "./image.tsx"

export interface IPostFetchData {
    id: number,
    image: string,
    text: string,
    date: number,
    lesson_num: number,
    title: string,
    description: string,
    author: number
  }

interface IPostData {
    data: IPostFetchData
}

function LargePost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-large">
                <PostImage />
                <PostContent />
                <PostControl />
            </div>
        </PostContext>
    )
}

function MediumPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-medium">
                <PostImage />
                <PostContent />
                <PostControl />
            </div>
        </PostContext>
    )
}

function SmallPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <PostContext value={props.data}>
            <div className="post-small">
                <PostImage />
                <PostContent />
                <PostControl />
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