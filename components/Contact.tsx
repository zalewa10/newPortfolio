import ContactForm from "./elements/ContactForm";
import Container from "./ui/container";

const Contact = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-6 lg:py-8">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 lg:pt-32 flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl w-full">
              Contact
            </h1>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
