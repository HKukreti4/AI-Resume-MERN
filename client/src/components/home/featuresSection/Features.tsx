import { Brain, FileCheck, Zap, Download, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description: "Smart AI suggestions help you write compelling content that stands out to recruiters.",
  },
  {
    icon: FileCheck,
    title: "ATS-Optimized",
    description: "Ensure your resume passes applicant tracking systems with our optimized formatting.",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description: "Create a professional resume in minutes, not hours. No design skills required.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Export your resume as PDF, Word, or plain text. Download unlimited times.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your information with third parties.",
  },
  {
    icon: Sparkles,
    title: "Modern Templates",
    description: "Choose from dozens of professionally designed templates that make an impact.",
  },
];

export  const Features = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-black/30 ">
           
      <div className="max-w-4/5 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xl md:text-5xl font-bold bg-gradient-to-r  from-blue-700 via-white to-yellow-600  bg-clip-text text-transparent h-auto">
            Everything You Need to 
            <span className="text-gradient"> Get Hired</span>
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you create the perfect resume and land your dream job faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow   transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="mb-4 inline-flex  rounded-xl gradient-primary text-blue-400" >
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r  from-yellow-200  to-blue-600  bg-clip-text text-transparent">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
                  </Card>
          ))}
        </div>
      </div>
       
    </section>
  );
};
