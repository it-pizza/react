function SearchForm() {
    return (
        <>
            <form method="get" className="header__search-form">
                <input type="text" placeholder="Search" className="header__search-input" />
            </form>
            <button type="button" className="header__search-hide"></button>
        </>
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
        <div className="header__search">
            <SearchForm />
            <SearchButton/>
        </div>
    )
}