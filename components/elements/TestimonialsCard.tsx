import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testimonials } from "@/constants/index";

const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-4">
      {testimonials.map((route, index) => (
        <Card className="min-w-[200px] flex flex-col justify-end" key={index}>
          <CardHeader>
            <blockquote className="mt-6 border-l-2 pl-6 italic text-sm text-muted-foreground">
              {route.subtext}
            </blockquote>
          </CardHeader>

          <CardFooter className="flex flex-col items-start">
            <p>{route.name}</p>
            <CardDescription>{route.role}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AboutCard;
