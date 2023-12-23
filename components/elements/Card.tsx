import Image from "next/image";

import { product } from "@/constants/index";
import Container from "../ui/container";

const Card = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-full gap-10">
        {product.map((route) => (
          <div className="flex flex-col items-center rounded-lg shadow-md gap-3 border p-2">
            <Image
              src={route.imgURL}
              alt="Image"
              width={40}
              height={40}
              className="py-5"
            />
            <div className=" text-center px-6 flex flex-col gap-4">
              <h2 className="font-bold text-md">{route.name}</h2>
              <p className="text-sm text-primary/80">{route.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Card;
