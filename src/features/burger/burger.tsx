export function Burger() {

    return (
        <div className="header__burger">
            <input type="checkbox" id="header__burger-checkbox"></input>
            <label htmlFor="header__burger-checkbox" className="header__burger-button">
                <span id="header__burger-line"></span>
            </label>
        </div>
    )
}