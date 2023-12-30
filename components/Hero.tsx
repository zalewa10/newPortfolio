import React from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const Hero = () => {
  return (
    <main className="bg-background px-4 sm:px-6 lg:px-8 pb-5">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start justify-between gap-6">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl">
              Front-End React <br /> Developer{" "}
              <img
                src="https://em-content.zobj.net/source/apple/354/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png"
                className="inline h-12"
                alt=""
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-sm text-center md:text-left lg:max-w-lg">
              Hi, I'm Krzysztof Zalewski. A passionate website developer based
              in Poznań, Poland.
            </p>
            <Button className="text-md">
              Contact Me
              <ChevronRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <svg
            width="548"
            height="486"
            viewBox="0 0 548 486"
            fill="#3576df"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-72 md:max-w-xs lg:max-w-md"
          >
            <path d="M509.325 103.624C561.925 180.324 558.725 303.424 504.625 382.024C450.525 460.624 345.425 494.624 259.025 483.824C172.625 473.024 105.025 417.424 57.3248 342.624C9.72478 267.724 -17.8752 173.724 15.9248 107.824C49.8248 41.9243 145.025 4.3243 246.825 0.5243C348.625 -3.1757 456.825 26.9243 509.325 103.624Z" />
          </svg>
        </div>
      </Container>
    </main>
  );
};

export default Hero;
