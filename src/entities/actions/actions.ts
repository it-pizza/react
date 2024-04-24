import { IButton } from "../../shared/button/button"

interface IState {
    firstValue?: number
    lastValue?: number
    action?: string
    currentValue?: string
    value?: string
}

export function calculator(props: IButton) {
    const { state, value } = props
    const { firstValue, lastValue, action, currentValue } = state.state

    if (value === "+" || value === "-") {
        state.setState((prevState: IState) => ({
            ...prevState,
            action: value,
            currentValue: "lastValue"
        }))
    } else if (value === "=") {
        let result
        switch (action) {
            case "+":
                result = firstValue + lastValue
                break
            case "-":
                result = firstValue - lastValue
                break
        }
        props.state.setState({ ...props.state.state, value: result, firstValue: result, action: undefined, lastValue: 0 })
    } else if (currentValue === "firstValue") {
        const newValue = firstValue === 0 ? value : `${firstValue}${value}`
        state.setState((prevState: IState) => ({
            ...prevState,
            value: newValue,
            firstValue: newValue
        }))
    } else if (currentValue === "lastValue") {
        const newValue = lastValue === 0 ? `${firstValue} ${action} ${value}` : `${firstValue} ${action} ${lastValue}${value}`
        state.setState((prevState: IState) => ({
            ...prevState,
            value: newValue,
            lastValue: `${lastValue}${value}`
        }))
    }
}
