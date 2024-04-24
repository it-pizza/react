import { useState } from "react"
import { Display, Keyboard } from "../../entities/index.ts"

export interface IStateControls { 
    value: string
    firstValue: number
    lastValue: number
    currentValue: "firstValue" | "lastValue" 
    action: "+" | "-" | undefined
}

type TState = [IStateControls, Function]

export function Calculator() {
    const [state, setState]: TState = useState({ value: "0" , firstValue: 0, lastValue: 0 , currentValue: "firstValue", action: undefined })

    return (
        <div className="calculator">
            <Display value={state.value}/>
            <Keyboard state={state} setState={setState}/>
        </div>
    )
}