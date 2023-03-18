import { Link } from "react-router-dom"
type Props = {
  Footer: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Footer({ Footer }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container__inner-1">
          <div className="container__logo"><span>ARTSY.</span></div>

          <ul className="container__lists">
            <li className="container__list"><Link className="container__link" to="/">Home</Link></li>
            <li className="container__list"><Link className="container__link" to="/">Marketplace</Link></li>
            <li className="container__list"><Link className="container__link" to="/">Auctions</Link></li>
            <li className="container__list"><Link className="container__link" to="/">Drops</Link></li>
          </ul>

          <ul className="container__lists">
            <li className="container__list"><Link className="container__link" to="/">Blog</Link></li>
            <li className="container__list"><Link className="container__link" to="/">Wallets</Link></li>
            <li className="container__list"><Link className="container__link" to="/">Rates</Link></li>
            <li className="container__list"><Link className="container__link" to="/">High bids</Link></li>
          </ul>

          <ul className="container__lists">
            <li className="container__list">
              <img className="container__icon" src="/message.svg" alt="cart icon" />
              <span>artsystudios@gmail.com</span>
            </li>
            <li className="container__list">
              <img className="container__icon" src="/location.svg" alt="search icon" />
              <span>Lagos, Nigeria.</span>
            </li>
          </ul>
        </div>

        <div className="container__inner-2">Artsy studio © {new Date().getFullYear()}. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer