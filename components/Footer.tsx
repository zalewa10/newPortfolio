import Link from "next/link";
import Container from "./ui/container";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <Separator />
          <div className="flex flex-col items-center justify-center md:items-start gap-6 w-full pt-6">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              &#60; Made with passion by {""}
              <Link href="" className="underline">
                Krzysztof Zalewski
              </Link>
              {""} &#47;&#62;
            </code>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Footer;
