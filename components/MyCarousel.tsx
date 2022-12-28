import { Carousel } from "flowbite-react";
import CarouselCard from "./CarouselCard";

export default function MyCarousel() {
  return (
    <div className="mt-48">
      <h2 className="flex justify-center mb-6 text-4xl font-bold text-black">
        Top Campaigns
      </h2>
      <div className="text-black bg-violet-50 h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-md">
        <Carousel slide={true}>
          <div className="flex justify-center">
            <CarouselCard
              title="Dancing with the stars"
              description="A group of old people have one dream: Visit space. Are we able to
            fund this dream into reality?"
              img="/space.png"
            />
          </div>
          <div className="flex justify-center" data-carousel-item>
            <CarouselCard
              title="Our planet is our future"
              description="Over the centuries, humankind recklessly destroyed the earths forests.
            It's finally time to reverse course"
              img="/plant.png"
            />
          </div>
          <div className="flex justify-center" data-carousel-item>
            <CarouselCard
              title="Hey guys! I am sorry!"
              description="He did some mistakes, but actually he is a good guy, and he really wants to make it all back. Can you help him?"
              img="/sbf.jpeg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
