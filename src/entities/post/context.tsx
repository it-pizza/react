import { ReactNode, createContext } from "react";
import { IPostFetchData } from "./post";

interface IPostContext {
    value: IPostFetchData
    children: ReactNode
}

const postContext = createContext<IPostFetchData | null>(null)

export function PostContext(props: IPostContext ) {
    return (
        <postContext.Provider value={props.value}>
            {props.children}
        </postContext.Provider>
    )
}