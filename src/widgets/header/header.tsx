import { Burger, Search } from "../../features/index.ts";

export function Header() {
    return (
        <header className="header">
            <Burger />
            <Search />
        </header>
    )
}