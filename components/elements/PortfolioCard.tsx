import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type ButtonTech = {
  tech: string;
};

type Project = {
  title: string;
  imgURL: StaticImageData;
  desc: string;
  buttons: ButtonTech[];
  link: string;
};
type PortfolioCardProps = {
  project: Project;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const { title, imgURL, desc, buttons, link } = project;

  return (
    <Card className="sm:w-[350px] ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        {imgURL && (
          <Image src={imgURL} width={40} height={40} alt="Website Preview" />
        )}
        <CardDescription className="mt-5">{desc}</CardDescription>
      </CardContent>

      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          {buttons &&
            buttons.map((button, index) => (
              <Button key={index}>{button.tech}</Button>
            ))}
        </div>
      </CardFooter>

      <CardFooter>
        <Button variant="outline">
          Visit
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
