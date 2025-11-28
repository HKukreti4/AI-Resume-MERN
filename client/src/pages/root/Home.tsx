import AboutSection from "@/components/home/aboutSection/AboutSection"
import CallToAction from "@/components/home/callToActions/CallToAction"
import { Features } from "@/components/home/featuresSection/Features"
import HeroSection from "@/components/home/heroSection/HeroSection"
import { HowItWorks } from "@/components/home/howItWork/HowItWork"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Features/>
      <HowItWorks/>
      <AboutSection/>
      
      <CallToAction/>
    </>
  )
}

export default Home