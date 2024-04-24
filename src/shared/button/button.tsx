interface IButton {
    value: string
}

export function Button(props: IButton) {
    return <button>{props.value}</button>
}