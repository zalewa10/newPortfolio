import React from "react";
import Container from "./ui/container";
import Card from "./elements/Card";

const About = () => {
  return (
    <main
      className="min-h-screen bg-background"
      style={{ minHeight: "calc(100vh - 88.64px)" }}
    >
      <div className="bg-secondary px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start justify-between gap-6">
              <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl">
                My Services
              </h1>
              {/* <p className="text-lg text-muted-foreground max-w-sm text-center md:text-left lg:max-w-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores, quo voluptas nesciunt iste facere voluptates.
              </p> */}
              <Card />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default About;
