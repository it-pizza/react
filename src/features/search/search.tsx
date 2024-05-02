function SearchForm() {
    return (
        <form method="get" className="header__search">
            <input type="text" placeholder="Search" className="header__search-input" />
        </form>
    )
}

function SearchButton() {
    return (
        <div className="header__search-button">
            <input type="checkbox" id="header__search-checkbox" />
            <label htmlFor="header__search-checkbox"></label>
        </div>
    )
}

export function Search() {
    return (
        <>
            <SearchForm />
            <SearchButton/>
        </>
    )
}