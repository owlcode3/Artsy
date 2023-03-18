import BooleanEgyptian from "./booleanEgyptian"

function FeaturedProducts() {
  return (
    <div className="featured">
      <div className="featured__container">
        <div className="featured__heading">Featured products</div>
        <BooleanEgyptian imageSrc="/be-1.svg" />
        <BooleanEgyptian rearrange imageSrc="/be-2.svg" />
        <BooleanEgyptian imageSrc="/be-3.svg" />
      </div>
    </div>
  )
}

export default FeaturedProducts