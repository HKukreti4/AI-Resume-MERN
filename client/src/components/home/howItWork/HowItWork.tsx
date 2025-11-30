import { FileText, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Enter Your Information",
    description: "Fill in your work experience, education, and skills. Our intuitive form guides you through every step.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Optimization",
    description: "Our AI analyzes your content and suggests improvements to make your resume stand out to recruiters.",
  },
  {
    icon: Download,
    number: "03",
    title: "Download & Apply",
    description: "Export your polished resume in your preferred format and start applying to jobs with confidence.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 max-w-4/5 mx-auto px-4 md:px-8 lg:px-12">
      <div className="mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r  from-blue-700 to-yellow-600 bg-clip-text text-transparent ">
            Simple Process, <span className="text-gradient">Powerful Results</span>
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Create your professional resume in three easy steps
          </p>
        </div>

        <div className=" grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" style={{ width: '66%', left: '17%' }} />

          {steps.map((step, index) => (
          <div className="relative"  key={index}>
              <div className="flex flex-col items-center text-center space-y-4" >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="h-12 w-12 text-yellow-100" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-background border-4  flex items-center justify-center border-orange-400">
                    <span className="text-sm font-bold  text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mt-6">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step?.description}
                </p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
