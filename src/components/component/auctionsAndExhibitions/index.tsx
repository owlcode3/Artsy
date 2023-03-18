import { Link } from "react-router-dom";


function AuctionsAndExhibitions() {
  return (
    <div className="ae">
      <div className="ae__container">
        <div className="ae__heading-box">
          <h2 className="ae__heading">See Upcoming Auctions and Exhibitions</h2>
          <span className="ae__line"></span>
        </div>
        <div className="ae__img-box">

          <div className="ae__texts">
            <div className="ae__first-part">
              <div className="ae__number-box">
                <span className="ae__dot"></span>
                <span className="ae__number">01</span>
              </div>

              <div className="ae__monalisa-box">
                <h3 className="ae__monalisa">MONALISA REDEFINED IN STYLE.</h3>
                <span className="ae__start">Start on : 08:00 GTS . Monday </span>
                <p className="ae__exclusive">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
              </div>

            </div>

            <div className="ae__second-part">
              <span className="ae__see-more">See more</span>
              <Link to="/" className="ae__link">Set a reminder</Link>
            </div>
          </div>

        </div>
        <div className="ae__icon-box">
          <span className="ae__bar"></span>
          <div className="ae__icons">
            <span className="ae__icon"><img src="/prev.svg" alt="prev" /></span>
            <span className="ae__icon"><img src="/next.svg" alt="next" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionsAndExhibitions;