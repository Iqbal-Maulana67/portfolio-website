import FloatingEmojis from "@/components/FloatingEmojis";
import Homepage from "@/components/HomePage";
import ProjectPage from "@/components/ProjectPage";
import SmoothScroll from "@/components/SmoothScrolling";

export default function Home() {
  return (
    <main className="relative" id="main-page">
      <SmoothScroll>
        <FloatingEmojis />

        <Homepage />
        <ProjectPage />
        <section className="min-h-screen"></section>
      </SmoothScroll>
    </main>
  );
}
