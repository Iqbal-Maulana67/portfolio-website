"use client";

export default function ProjectPage() {
  return (
    <section id="sectionPin">
      <div className="pin-wrap">
        <div className="w-full lg:w-2xl md:w-2xl justify-center project-header lg:opacity-0 sm:opacity-100 text-center md:text-left mb-6 lg:mb-0 md:mb-0">
          <h2 className="{poppins.className} text-3xl font-semibold">
            Projects
          </h2>
          <h3>Things I’ve built along the way.</h3>
        </div>
        <div className="lg:h-full md:h-full sm:h-fit w-xl text-center p-5 project-container mr-5 mb-6 lg:mb-0">
          <img src="/images/valkbot.png" alt="" className="rounded-xl" />
          <h2 className="{poppins.className} text-2xl font-semibold mt-2">
            Valk Bot
          </h2>
          <h3 className="text-justify mt-2 hidden md:block lg:block">
            A fully featured Telegram bot designed to automate various workflows
            and interaction processes. I was responsible for the complete
            development lifecycle, including feature implementation, message
            handling, and integration with external services when needed. The
            bot was deployed and hosted in a stable environment, ensuring uptime
            and responsiveness. This project demonstrates my ability to design
            automated systems, manage hosting, and implement clean, maintainable
            bot logic.
          </h3>
        </div>
        <div className="lg:h-full md:h-full sm:h-fit w-xl text-center p-5 project-container mr-5 mb-6 lg:mb-0">
          <img src="/images/leaf.png" alt="" className="rounded-xl" />
          <h2 className="{poppins.className} text-2xl font-semibold mt-2">
            Leaf Classification App
          </h2>
          <h3 className="text-justify mt-2 hidden md:block lg:block">
            A mobile application powered by a custom-built machine learning
            model for leaf classification. I handled dataset preparation,
            preprocessing, and model training to achieve optimal accuracy.
            Beyond the ML pipeline, I also developed the supporting API and
            implemented all UI screens for the mobile application. This project
            showcases my cross-disciplinary skills in machine learning, backend
            API development, and mobile programming, delivering a complete
            end-to-end solution from data to deployment.
          </h3>
        </div>
        <div className="lg:h-full md:h-full sm:h-fit w-xl text-center p-5 project-container mr-5 mb-6 lg:mb-0">
          <img src="/images/akus.png" alt="" className="rounded-xl" />
          <h2 className="{poppins.className} text-2xl font-semibold mt-2">
            A-KUS
          </h2>
          <h3 className="text-justify mt-2 hidden md:block lg:block">
            A comprehensive financial management system built for school
            operations. I developed both the web application and the set of APIs
            responsible for synchronizing data to the mobile app. This included
            converting local data sources into clean endpoint structures and
            parsing complex weather API data. I also created the mobile UI
            screens and ensured reliable data transmission across the system.
            This project highlights my ability to build integrated systems
            involving backend logic, API design, and mobile-friendly data flow.
          </h3>
        </div>
      </div>
    </section>
  );
}
