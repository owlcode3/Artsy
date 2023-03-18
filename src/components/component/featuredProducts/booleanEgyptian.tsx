import { Link } from "react-router-dom";
type Props = {
  rearrange?: boolean,
  imageSrc: string
}

function BooleanEgyptian({ rearrange, imageSrc }: Props) {
  return (
    <div className="featured__boolean">
      <div className="featured__boolean-inner">
        {
          !rearrange ?
            <>
              <div className="featured__img-box">
                <img className="featured__img" src={imageSrc} alt="img" />
                <div className="featured__reveal">
                  <Link className="featured__link" to="/">
                    <span>View product</span>
                    <span className="featured__arrow-box featured__arrow-box--grey"><img className="featured__arrow" src="/arrow-grey.svg" alt="arrow" /></span>
                  </Link>
                </div>
              </div>

              <div className="featured__text-box">
                <h2 className="featured__heading-2">The Boolean Egyptian</h2>
                <p className="featured__paragraph">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="featured__creators">
                  <div>
                    <img className="featured__creator-img" src="/ppl-1.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-2.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-3.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-4.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-5.svg" alt="img" />
                  </div>
                  <span className="featured__major">64 major creators</span>
                  <span className="featured__arrow-box"><img className="featured__arrow" src="/arrow.svg" alt="arrow" /></span>
                </div>
              </div>
            </>
            :
            <>
              <div className="featured__text-box">
                <h2 className="featured__heading-2">The Boolean Egyptian</h2>
                <p className="featured__paragraph">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="featured__creators">
                  <div>
                    <img className="featured__creator-img" src="/ppl-1.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-2.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-3.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-4.svg" alt="img" />
                    <img className="featured__creator-img" src="/ppl-5.svg" alt="img" />
                  </div>
                  <span className="featured__major">64 major creators</span>
                  <span className="featured__arrow-box"><img className="featured__arrow" src="/arrow.svg" alt="arrow" /></span>
                </div>
              </div>

              <div className="featured__img-box">
                <img className="featured__img" src={imageSrc} alt="img" />
                <div className="featured__reveal">
                  <Link className="featured__link" to="/">
                    <span>View product</span>
                    <span className="featured__arrow-box featured__arrow-box--grey"><img className="featured__arrow" src="/arrow-grey.svg" alt="arrow" /></span>
                  </Link>
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default BooleanEgyptian