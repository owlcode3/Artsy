import Carousel from "./carousel";


function Herocarousel() {

  return (
    <div className="hero__carousel">
      <Carousel zero={0} one={2} two={1} three={3} four={4} />
      <Carousel zero={1} one={3} two={4} three={2} four={0} />
      <Carousel zero={2} one={3} two={4} three={0} four={1} />
      <Carousel zero={3} one={4} two={1} three={2} four={0} />
      <Carousel zero={4} one={0} two={2} three={1} four={3} />
    </div>
  )
}

export default Herocarousel