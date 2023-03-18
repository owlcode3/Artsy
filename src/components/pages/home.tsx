import AuctionsAndExhibitions from "../component/auctionsAndExhibitions"
import ExploreMarket from "../component/exploreMarket"
import FeaturedProducts from "../component/featuredProducts"
import Hero from "../component/hero"
import NewsLetter from "../component/newsLetter"
import TopCreators from "../component/topCreators"

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AuctionsAndExhibitions />
      <ExploreMarket />
      <TopCreators />
      <NewsLetter />
    </div>
  )
}

export default Home