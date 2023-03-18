import { Link } from "react-router-dom"


function ExploreMarket() {
  return (
    <div className="explore">
      <div className="explore__inner">
        <div className="explore__container">
          <span className="explore__text">Explore marketplace</span> <Link className="explore__link" to="/"><img className="explore__icon" src="/next-big.svg" alt="next icon" /></Link>
        </div>
        <div className="explore__container">
          <span className="explore__text">See auctions </span> <Link className="explore__link" to="/"><img className="explore__icon" src="/next-big.svg" alt="next icon" /></Link>
        </div>
      </div>
    </div>
  )
}

export default ExploreMarket