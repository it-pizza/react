import { Button } from "../../shared/index.ts";

export function PostControl() {
    return (
        <div className="post__control">
            <Button className="post__button-like"/>
            <Button className="post__button-disLike"/>
            <Button className="post__button-favorite"/>
            <Button className="post__button-other"/>
        </div>
    )
}