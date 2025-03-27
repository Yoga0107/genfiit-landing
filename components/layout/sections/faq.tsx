import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the telehealth app free to use?",
    answer: "Yes! Our app offers free access to essential healthcare features. However, some premium services may require a subscription.",
    value: "item-1",
  },
  {
    question: "How can I book an online consultation?",
    answer:
      "You can easily book a consultation through our app by selecting a doctor, choosing a time slot, and confirming your appointment.",
    value: "item-2",
  },
  {
    question: "Are my medical records secure?",
    answer:
      "Absolutely. We use advanced encryption and security protocols to keep your personal health information safe and confidential.",
    value: "item-3",
  },
  {
    question: "Can I get a prescription through the app?",
    answer: "Yes, licensed healthcare professionals can provide e-prescriptions after an online consultation if necessary.",
    value: "item-4",
  },
  {
    question: "Is the app available in multiple languages?",
    answer: "Currently, our app supports multiple languages to ensure accessibility for a diverse user base.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
