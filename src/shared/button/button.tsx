import { calculator } from "../../entities/actions/actions"
import { IState } from "../../entities/keyboard/keyboard"

export interface IButton {
    value: string
    state: IState
}

export function Button(props: IButton) {
    return <button onClick={() => calculator(props)}>{props.value}</button>
}