import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
    <Card className="min-w-[330px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        {imgURL ? (
          <Image
            src={imgURL}
            className="w-full"
            alt="Website Preview"
            placeholder="blur"
          />
        ) : (
          <Skeleton className="h-40 w-full" />
        )}
        <CardDescription className="mt-5">{desc}</CardDescription>
      </CardContent>

      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          {buttons &&
            buttons.map((button, index) => (
              <Button key={index} size="sm" className="cursor-auto">
                {button.tech}
              </Button>
            ))}
        </div>
      </CardFooter>

      <CardFooter>
        <Link href={link} rel="noopener noreferrer" target="_blank">
          <Button variant="outline">
            Visit
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
