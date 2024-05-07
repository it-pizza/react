import { useRef } from "react"
import { ILogin } from "../../widgets/index.ts"

interface ILoginInput {
    name: 'email' | 'password'
    setValue: React.Dispatch<React.SetStateAction<ILogin | undefined>>
    value: ILogin | undefined
}

export function LoginInput(props: ILoginInput) {
    const inputRef = useRef<HTMLInputElement>(null)

    function setValue(event: React.ChangeEvent<HTMLInputElement>) {
        props.setValue(
            {
                ...props.value,
                [event.target.name]: event.target.value
            }
        )
    }

    return (
        <div className="login__input-container">
            <label htmlFor={props.name} className={`login__label-${props.name}`}>{props.name}:</label>
            <input name={props.name} onChange={(event) => setValue(event)} className={`login__input-${props.name}`} placeholder={props.name}></input>
        </div>
    )
}