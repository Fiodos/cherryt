import { Card } from "flowbite-react";
import { NextPage } from "next";

interface Props {
  img: string;
  title: string;
  description: string;
}

const CarouselCard: NextPage<Props> = (props) => {
  return (
    <Card horizontal={true} imgSrc={props.img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <a href="/" className="text-violet-600 underline">
        Read more
      </a>
    </Card>
  );
};

export default CarouselCard;
