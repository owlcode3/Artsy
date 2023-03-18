import { useEffect, useState } from "react";

type Props = {
  zero: number,
  one: number,
  two: number,
  three: number,
  four: number,
}

function Carousel({ zero, one, two, three, four }: Props) {
  const [slideX, setSlideX] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => setSlideX(prev => (prev === 4 ? 0 : prev + 1)), 3000);
    return () => clearInterval(slide);
  }, []);
  return (
    <>
      <ul className="hero__carousel-lists">
        <li style={{ transform: `translateX(${100 * (zero - slideX)}%)` }} className="hero__carousel-list hero__carousel-list--1">
          <img className="hero__carousel-img  hero__carousel-img--1" src="/img-1.svg" alt="carousel image" />
        </li>
        <li style={{ transform: `translateX(${100 * (one - slideX)}%)` }} className="hero__carousel-list hero__carousel-list--2">
          <img className="hero__carousel-img  hero__carousel-img--1" src="/img-2.svg" alt="carousel image" />
        </li>
        <li style={{ transform: `translateX(${100 * (two - slideX)}%)` }} className="hero__carousel-list hero__carousel-list--3">
          <img className="hero__carousel-img  hero__carousel-img--1" src="/img-3.svg" alt="carousel image" />
        </li>
        <li style={{ transform: `translateX(${100 * (three - slideX)}%)` }} className="hero__carousel-list hero__carousel-list--4">
          <img className="hero__carousel-img  hero__carousel-img--1" src="/img-4.svg" alt="carousel image" />
        </li>
        <li style={{ transform: `translateX(${100 * (four - slideX)}%)` }} className="hero__carousel-list hero__carousel-list--5">
          <img className="hero__carousel-img  hero__carousel-img--1" src="/img-5.svg" alt="carousel image" />
        </li>
      </ul>
    </>
  )
}

export default Carousel