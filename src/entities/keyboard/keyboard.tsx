import { Button } from "../../shared/index.ts";
import { IStateControls } from "../../widgets/calculator/calculator.tsx";

export interface IState {
    state: IStateControls
    setState: Function
}

export function Keyboard(props: IState) {
    return (
        <div className="calculator__keyboard">
            <Button value="1" state={props}/>
            <Button value="2" state={props}/>
            <Button value="3" state={props}/>
            <Button value="4" state={props}/>
            <Button value="5" state={props}/>
            <Button value="6" state={props}/>
            <Button value="7" state={props}/>
            <Button value="8" state={props}/>
            <Button value="9" state={props}/>
            <Button value="-" state={props}/>
            <Button value="0" state={props}/>
            <Button value="+" state={props}/>
            <Button value="=" state={props}/>
        </div>
    )
}