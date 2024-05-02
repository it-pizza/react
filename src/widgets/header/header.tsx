import { Burger, Search } from "../../features/index.ts";
import { User } from "../index.ts";

export function Header() {
    return (
        <header className="header">
            <Burger />
            <Search />
            <User />
        </header>
    )
}