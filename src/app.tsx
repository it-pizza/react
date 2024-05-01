import { ChangeEvent, useState } from "react"

interface IFormData {
    email: string
    password: string
}

function Form() {
    const [useData, setUseData] = useState<IFormData>({ email: "", password: "" })
    
    function setFormData(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        setUseData({
            ...useData, 
            [event.target.name]: event.target.value
        })
    }

    console.log(useData)

    return (
        <form method="get" className="form">
            <div className="form__input">
                <input type="email" name="email" placeholder="Email" onChange={setFormData} />
            </div>
            <div className="form__input">
                <input type="password" name="password" placeholder="Password" onChange={setFormData} />
            </div>
        </form>
    )
}

export function App() {
    return (
        <>
            <Form />
        </>
    )
}