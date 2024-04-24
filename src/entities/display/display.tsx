interface IValue {
    value: string
}

export function Display(props: IValue) {
    return (
        <div className="calculator__display">{props.value}</div>
    )
}