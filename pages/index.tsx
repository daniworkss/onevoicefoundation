import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import HighlightsRow from "@/components/home/HighlightsRow";
import WhyOneVoiceSection from "@/components/home/WhyOneVoiceSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StoriesSlider from "@/components/home/StoriesSlider";
import HowSupportWorks from "@/components/home/HowSupportWorks";
import AboutStrip from "@/components/home/AboutStrip";
import ImpactSection from "@/components/home/ImpactSection";
import PartnersStrip from "@/components/home/PartnersStrip";
import BottomCta from "@/components/home/BottomCta";

export default function Home() {
  return (
    <>
      <Head>
        <title>One Voice Foundation Inc. | One Voice. One Nigeria.</title>
        <meta
          name="description"
          content="One Voice Foundation Inc. uplifts Nigerian youth through health, education, and opportunity. Join us in building a more hopeful future."
        />
      </Head>

      <HeroSection />
      <HighlightsRow />
      <WhyOneVoiceSection />
      <ProgramsSection />
      <StoriesSlider />
      <HowSupportWorks />
      <AboutStrip />
      <ImpactSection />
      <PartnersStrip />
      <BottomCta />
    </>
  );
}
