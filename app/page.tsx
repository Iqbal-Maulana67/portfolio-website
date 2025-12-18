import FloatingEmojis from "@/components/FloatingEmojis";
import AboutPage from "@/components/Pages/AboutPage";
import ContactPage from "@/components/Pages/ContactPage";
import Homepage from "@/components/Pages/HomePage";
import ProjectPage from "@/components/Pages/ProjectPage";
import SkillPage from "@/components/Pages/SkillPage";
import SmoothScroll from "@/components/SmoothScrolling";

export default function Home() {
  return (
    <main className="relative" id="main-page">
      <SmoothScroll>
        <FloatingEmojis />

        <Homepage />
        <ProjectPage />
        <section className="h-fit w-full flex flex-col lg:flex-row mt-5 p-5 justify-start">
          <div className="lg:w-1/3 w-full">
            <AboutPage />
            <ContactPage />
          </div>
          <div className="w-full hidden md:block">
            <hr className="my-5 border-gray-700" />
          </div>
          <div className="lg:w-2/3 hidden lg:block md:block">
            <SkillPage />
          </div>
        </section>
        <section
          className="h-auto w-full text-gray-500 p-3 text-center"
          style={{ backgroundColor: "#111" }}
        >
          <span>@imfiekri</span>
        </section>
      </SmoothScroll>
    </main>
  );
}
