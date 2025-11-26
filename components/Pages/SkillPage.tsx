"use client";

import ProgressBar from "../ProgressBar";
import SkillContainer from "../SkillContainer";

export default function SkillPage() {
  return (
      <div className="flex flex-wrap justify-center">
        <SkillContainer
          data={{
            imgUrl: "/icons/express.svg",
            imgColor: "#fff",
            width: "100%",
            text: "Express.js",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/laravel.svg",
            imgColor: "#fff",
            width: "80%",
            text: "Laravel",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/django.svg",
            imgColor: "#fff",
            width: "80%",
            text: "Django",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/flutter.svg",
            imgColor: "#fff",
            width: "70%",
            text: "Flutter",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/next.svg",
            imgColor: "#fff",
            text: "Next.js",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/react.svg",
            imgColor: "#fff",
            width: "70%",
            text: "React",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/vue.svg",
            imgColor: "#fff",
            width: "70%",
            text: "Vue",
          }}
        />
      </div>
  );
}
