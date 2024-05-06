import { usePostContext } from "./context";

export function PostImage() {
    const context = usePostContext()
    
    return (
        <div className="post__image-container">
            <img src={context?.image} alt="" className="post__image"/>
        </div>
    )
}