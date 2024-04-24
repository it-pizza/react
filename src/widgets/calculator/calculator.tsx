import { Display, Keyboard } from "../../entities/index.ts"

export function Calculator() {
    return (
        <div className="calculator">
            <Display/>
            <Keyboard/>
        </div>
    )
}