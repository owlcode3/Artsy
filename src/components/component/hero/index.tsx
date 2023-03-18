import Herocarousel from './heroCarousel'
import Heroheading from './heroHeading'


function Hero() {
  return (
    <div className='hero'>
      <Heroheading />
      <Herocarousel />
    </div>
  )
}

export default Hero