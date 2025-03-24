import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Access Anytime, Anywhere",
    description:
      "Learn about mental health & nutrition or book a consultation right from your phone—anytime, anywhere!",
  },
  {
    icon: "BadgeCheck",
    title: "Talk to Real Experts",
    description:
      "Get advice from certified nutritionists and psychiatrists who are ready to help you stay healthy the right way.",
  },
  {
    icon: "Goal",
    title: "Learn What Matters to You",
    description:
      "Fun and easy-to-follow learning modules tailored to your needs—no complicated medical jargon!",
  },
  {
    icon: "PictureInPicture",
    title: "Interactive & Fun",
    description:
      "Not just boring text! Enjoy cool visuals, videos, and quizzes that make learning way more exciting.",
  },
  {
    icon: "MousePointerClick",
    title: "Book a Consultation in Seconds",
    description:
      "A few clicks, pick a schedule, and boom—you’re talking to a healthcare pro! No hassle, no stress.",
  },
  {
    icon: "Newspaper",
    title: "Trusted Health Info",
    description:
      "All our articles and learning materials are research-based, so you always get the right info.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our platform combines expert-led learning modules with seamless telehealth
        consultations, making it easier to enhance your mental well-being and nutritional health.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
