import AboutMeSection from "@/components/sections/AboutMeSection";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import Footer from "@/components/footer/Footer";
import Temporary from "@/components/sections/Temporary";

function Page() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      {/* <Temporary /> */}
      <Footer />
    </>
  );
}

export default Page;
