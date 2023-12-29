import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { product } from "@/constants/index";

const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 ">
      {product.map((route, index) => (
        <Card className="sm:w-[225px] md:w-[250px]" key={index}>
          <CardContent>
            <Image
              src={route.imgURL}
              alt="Image"
              width={40}
              height={40}
              className="py-5"
            />
            <CardTitle>{route.name}</CardTitle>
          </CardContent>

          <CardFooter>
            <CardDescription>{route.subtext}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AboutCard;
