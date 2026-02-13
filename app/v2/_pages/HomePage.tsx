import TypingText from "@/components/v2/animations/typing-animation";
import TypingGradientText from "@/components/v2/animations/type-gradient-text";

const description = `tainability.`;

export default function HomePageV2() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6 z-10 items-center justify-center">
        <div className="relative max-w-8xl mx-auto text-center ">
          <div className="flex items-center justify-center gap-2 animate-[fadeUp_0.5s_ease-out_forwards] mb-4">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-white/10 hover:bg-white/20 text-foreground border-white/20 py-1.5 px-4 text-sm">
              Available for New Projects
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-green-400/10 hover:bg-green-400/20 text-foreground border-white/20 py-1.5 px-4 text-sm">
              Open for Hiring
            </div>
          </div>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-center mb-4 animate-[fadeUp_0.6s_ease-out_forwards]">
            Hello, I'm Moch. Iqbal Maulana Fiekri
          </h1>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-center mb-4 animate-[fadeUp_0.6s_ease-out_forwards]">
            I build{" "}
            <TypingGradientText
              texts={["Great", "Scalable", "Secure"]}
              speed={200}
            />{" "}
            Apps
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            I’m a full-stack developer who builds scalable, production-ready
            systems with clean architecture, well-designed APIs, and a strong
            focus on quality, ownership, and long-term main
            <TypingText text={description} speed={20} />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-cyan-300/30 hover:bg-cyan-300/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Backend Developer
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-cyan-300/30 hover:bg-cyan-300/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Front-end Developer
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#0A2540]/30 hover:bg-[#0A2540]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Discord/Telegram Bot Developer
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#7F5AF0]/30 hover:bg-[#7F5AF0]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Machine Learning Engineer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
