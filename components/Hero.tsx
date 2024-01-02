import React from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { heroimg, reactgif } from "@/public/img";

const Hero = () => {
  const handleContactButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form");

    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="bg-background px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start justify-between gap-6">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl">
              Front-End React <br /> Developer{" "}
              <Image
                src={reactgif}
                className="inline ml-1 h-8 w-8 lg:h-12 lg:w-12"
                alt=""
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-sm text-center md:text-left lg:max-w-lg">
              Hi, I&apos;m Krzysztof Zalewski. A beginner website developer
              based in Poland. I approach coding with creativity and an open
              mindset.
            </p>
            <Button
              className="text-md rounded-lg py-5"
              size="lg"
              onClick={handleContactButtonClick}
            >
              Contact Me
              <ChevronRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="w-[448px] h-[386px] lg:w-[548px] lg:h-[486px] flex justify-end">
            <Image
              src={heroimg}
              alt="People illustrations by Storyset"
              className="screen-cover"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hero;
