import React from "react";
import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { stack, categories } from "@/constants";
import Container from "./ui/container";
import { git } from "@/public/img";

const Stack = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl w-full">
              Stack
            </h1>

            {/* <h2 className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                est quidem voluptates consequatur nihil ea pariatur dolores amet
                cupiditate odit cumque velit corrupti officiis, doloribus,
                aliquid, a sed sunt magni.
              </h2> */}
            <div className="flex flex-col">
              {categories.map((category) => (
                <div key={category} className="flex flex-row justify-between">
                  <p>{category}</p>
                  {/* Use .map to dynamically generate images based on the stack data */}
                  <div className="flex flex-row justify-between">
                    {stack
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <Image
                          key={item.name}
                          src={item.imgURL}
                          alt={item.alt}
                          width={20}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* <Marquee direction="left" speed={100} pauseOnHover={true} autoFill>
          {stack.map((item, key) => (
            <div key={key} className="flex flex-col items-center gap-1">
              <Image src={item.imgURL} alt={item.alt} width={30} height={30} />
            </div>
          ))}
        </Marquee>{" "} */}
    </main>
  );
};

export default Stack;
