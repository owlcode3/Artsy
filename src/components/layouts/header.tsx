import { Link } from "react-router-dom"

type Props = {
  Header: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header({ Header }: Props) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo"><span>ARTSY.</span></div>

        <ul className="nav__lists">
          <li className="nav__list"><Link className="nav__link" to="/">Home</Link></li>
          <li className="nav__list"><Link className="nav__link" to="/">Marketplace</Link></li>
          <li className="nav__list"><Link className="nav__link" to="/">Auctions</Link></li>
          <li className="nav__list"><Link className="nav__link" to="/">Drop</Link></li>
        </ul>

        <ul className="nav__lists">
          <li>
            <img className="nav__icon" src="/search.svg" alt="search icon" />
          </li>
          <li>
            <Link to="/">
              <img className="nav__icon" src="/cart.svg" alt="cart icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img className="nav__icon" src="/notis.svg" alt=" notification icon" />
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header