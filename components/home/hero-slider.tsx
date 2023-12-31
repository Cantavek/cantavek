import Slider from "react-slick";
import Image from "next/image";

const HeroSlider = ({ images }: { images: string[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, i) => (
        <div className="h-auto md:h-[27rem] w-full" key={i}>
          <Image 
          src={image}
          width={1480}
          height={612} 
          className="object-cover bg-skeleton"
          priority
          alt="" />
        </div>
      ))}
    </Slider>
  )
}

export default HeroSlider