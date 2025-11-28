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
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to
            <span className="text-gradient">Get Hired</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you create the perfect resume and land your dream job faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 ackdrop-blur"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl gradient-primary">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
         <svg className="absolute inset-0 -z-10 size-full blur-[300px]" width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#a)"> <path d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142-91.82 6.929-252.813 14.497-345.534 14.119s-112.296-8.932-132.029-20.074c-40.902-23.095-67.695-48.431-92.222-82.426-43.46-60.236-63.449-115.445-66.098-143.181-2.37-24.804 6.608-45.711 18.307-63.328 12.043-18.137 33.695-29.82 71.913-43.681 73.132-26.523 132.819-39.093 158.087-37.728 35.983 1.944 85.151 19.972 133.921 42.519 54.55 25.219 85.81 54.21 147.755 103.202 40.89 42.153 74.78 87.455 96.15 121.421 9.68 13.541 17 19.579 26.15 28.613" stroke="#8C00FF" strokeWidth="130" strokeLinecap="round"/> </g>
              <g filter="url(#b)"> <path d="M984.952 466.869c-15.802 15.902-31.604 31.803-106.587 82.344-74.982 50.541-208.666 135.24-287.962 179.98-79.297 44.74-100.155 46.955-122.408 47.039-46.123.173-81.297-8.423-118.747-25.508-66.356-30.274-110.243-67.666-125.983-90.043-14.077-20.012-16.578-42.214-15.158-62.931 1.461-21.329 14.257-41.82 40.13-72.221 49.508-58.173 94.326-97.906 116.549-109.022 31.647-15.829 82.36-24.343 134.93-28.808 58.801-4.994 99.563 4.55 176.224 16.248 55.375 16.094 106.309 38.276 141.054 56.869 14.842 6.848 24.021 8.443 36.22 11.703" stroke="#3E0090" strokeWidth="130" strokeLinecap="round"/> </g>
          </svg>
    </section>
  );
};
