import { useRef, useState} from "react";
import { LoginInput } from "../../features";
import "./login.scss"

export interface ILogin {
    email?: string
    password?: string
}

export function LoginForm() {
    const [useLogin, setUseLogin] = useState<ILogin>()
    const formRef = useRef<HTMLFormElement>(null)

    function FormSubmitData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.table(useLogin)
    }

    return (
        <form ref={formRef} className="login__form" onSubmit={(event) => FormSubmitData(event)}>
            <h1 className="form__title">Login:</h1>
            <hr></hr>
            <LoginInput name="email" setValue={setUseLogin} value={useLogin} />
            <LoginInput name="password" setValue={setUseLogin} value={useLogin} />
            <button type="submit">Submit</button>
        </form>
    )
}