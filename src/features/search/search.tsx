import { useRef } from 'react'
import './search.scss'

interface ISearchContainer {
    container: React.RefObject<HTMLDivElement>
}

function SearchForm(props: ISearchContainer) {
    const SearchButton = useRef<HTMLButtonElement>(null)

    function checkButton() {
        props.container.current!.classList.add('disable')
    }

    return (
        <div ref={props.container} className="header__search-container disable">
            <button ref={SearchButton} type="button" className="header__search-hide" onClick={checkButton}></button>
            <form method="get" className="header__search-form">
                <input type="text" placeholder="Search" className="header__search-input" />
            </form>
        </div>
    )
}

function SearchButton(props: ISearchContainer) {
    function unlockSearchForm() {
        props.container.current!.className = 'header__search-container'
    }

    return (
        <button className='header__search-unlock' onClick={unlockSearchForm}></button>
    )
}

export function Search() {
    const SearchContainer = useRef<HTMLDivElement>(null)

    return (
        <div className="header__search">
            <SearchForm container={SearchContainer} />
            <SearchButton container={SearchContainer}/>
        </div>
    )
}