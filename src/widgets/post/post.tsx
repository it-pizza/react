import { useEffect, useState } from "react"
import { fetchData } from "../../shared"
import { PostsFetchUrl } from "../../app/constants.ts"

interface IPostFetchData {
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
        <div className="post-large">
            <img src={props.data.image} alt="" />
        </div>
    )
}

function MediumPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <div className="post-medium">
        
        </div>
    )
}

function SmallPost(props: IPostData) {
    if (!props.data) {return}
    return (
        <div className="post-small">
        
        </div>
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