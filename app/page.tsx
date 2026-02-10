import FloatingEmojis from "@/components/FloatingEmojis";
import AboutPage from "@/app/_pages/AboutPage";
import ContactPage from "@/app/_pages/ContactPage";
import Homepage from "@/app/_pages/HomePage";
import ProjectPage from "@/app/_pages/ProjectPage";
import SkillPage from "@/app/_pages/SkillPage";
import SmoothScroll from "@/components/SmoothScrolling";

export default function Home() {
  return (
    <main className="relative" id="main-page">
      <FloatingEmojis />

      <Homepage />
      <ProjectPage />
      <section className="h-fit w-full flex flex-col lg:flex-row mt-5 p-5 justify-start">
        <div className="lg:w-1/3 w-full">
          <AboutPage />
          <ContactPage />
        </div>
        <hr className="my-5 border-gray-700 hidden md:block" />
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
    </main>
  );
}
