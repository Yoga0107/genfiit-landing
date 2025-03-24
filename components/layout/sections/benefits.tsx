import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "BookOpenCheck",
    title: "Comprehensive Learning",
    description:
      "Expand your knowledge on nutrition and mental health through structured learning modules designed by experts.",
  },
  {
    icon: "Brain",
    title: "Expert Consultation",
    description:
      "Easily book telehealth consultations with certified professionals, including nutrition specialists and psychiatrists.",
  },
  {
    icon: "Salad",
    title: "Personalized Health Insights",
    description:
      "Gain valuable insights into your mental well-being and nutrition through expert-driven recommendations.",
  },
  {
    icon: "BriefcaseMedical",
    title: "Accessible & Reliable Healthcare",
    description:
      "Get trusted medical advice anytime, anywhere, from qualified healthcare professionals through our platform.",
  },
];


export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Wellness
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Expand your knowledge on mental health and nutrition, empowering you to make informed decisions for a healthier mind and body.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
