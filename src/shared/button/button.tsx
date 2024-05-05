interface IButton {
    value?: string | number
    className?: string
}

export function Button(props: IButton) {
    return (
        <button className={props?.className}>{props?.value}</button>
    )
}