import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";
import { useToast } from "../ui/use-toast";
import styled from "styled-components";
import Image from "next/image";
import { contactimg, email } from "@/public/img";
const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure the confetti doesn't interfere with user interactions */
  z-index: 999; /* Adjust the z-index to ensure the confetti is above other elements */
`;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    surname: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showToast = (description: string, success: boolean) => {
    toast({
      description,
      variant: "default",
    });

    if (success) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1xs8dic",
        "template_lub6js1",
        {
          from_name: form.name,
          to_name: "KZALEWSKI",
          from_email: form.email,
          to_email: "kontakt.kzalewski@gmail.com",
          message: form.message,
        },
        "A3ZtJ2CFFxaCF3lq3"
      )
      .then(
        () => {
          setLoading(false);
          showToast(
            "Thank you. I will get back to you as soon as possible.",
            true
          );

          setForm({
            name: "",
            email: "",
            message: "",
            surname: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showToast("Ahh, something went wrong. Please try again.", false);
        }
      );
  };

  return (
    <div className="md:flex py-4 w-full">
      <ConfettiContainer>{showConfetti && <Confetti />}</ConfettiContainer>
      <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 md:w-full">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:flex md:flex-col md:justify-between"
          id="contact-form"
        >
          <div className="md:space-y-4">
            <div className="md:flex md:flex-row md:items-center md:space-x-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="mt-3 md:mt-0">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  type="text"
                  name="surname"
                  value={form.surname}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="w-full md:w-auto mt-3 md:mt-0">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="w-full md:w-auto mt-3 md:mt-0">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                placeholder="Type your message here."
                onChange={handleChange}
                rows={5}
                required={true}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 w-full md:w-1/4 text-md"
            size="lg"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
        <div className="hidden md:flex">
          <Image
            src={contactimg}
            alt="Internet illustrations by Storyset"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
