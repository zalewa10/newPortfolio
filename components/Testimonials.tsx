import TestimonialsCard from "./elements/TestimonialsCard";
import Container from "./ui/container";

const Testimonials = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl w-full">
              Testimonials
            </h1>
            <TestimonialsCard />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Testimonials;
