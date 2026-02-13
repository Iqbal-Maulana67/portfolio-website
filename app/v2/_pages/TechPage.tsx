import TechCard from "@/components/v2/tech/tech-card";

export default function TechPage() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden mb-20">
      <div className="container px-4 md:px-6 z-10 items-center justify-center">
        <div className="relative max-w-8xl mx-auto text-center mb-20">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-white/10 hover:bg-white/20 text-foreground border-white/20 py-1.5 px-4 text-xs">
            Technologies
          </div>
          <h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-4xl mb-5">
            Tech Stack
          </h1>
          <p className="text-mute-foreground text-xl max-w-2xl mx-auto mb-5 font-medium">
            The engineering stack I use to turn concepts into production-ready
            systems
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-5  min-h-[200px]">
        <TechCard
          dict={{
            image: "/icons/frontend.svg",
            headerName: "Frontend",
            list: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            color: "#a74cff",
            className: "bg-purple-400/40",
          }}
        />
        <TechCard
          dict={{
            image: "/icons/backend.svg",
            headerName: "Backend",
            list: ["Node.js", "Express.js", "Go", "PostgreSQL"],
            color: "#00d3f2",
            className: "bg-cyan-400/40",
          }}
        />
        <TechCard
          dict={{
            image: "/icons/bot.svg",
            headerName: "Bot Dev",
            list: ["Discord.js", "Telegram", "WABA Official/Unofficial", "n8n"],
            color: "#fb64b6",
            className: "bg-pink-400/40",
          }}
        />
        <TechCard
          dict={{
            image: "/icons/ai.svg",
            headerName: "ML Engineer",
            list: ["TensorFlow", "Pytorch", "FastAI", "LLM APIs"],
            color: "#51a2ff",
            className: "bg-blue-400/40",
          }}
        />
      </div>
    </div>
  );
}
