"use client";

import ProgressBar from "../../components/ProgressBar";
import SkillContainer from "../../components/SkillContainer";

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
            imgUrl: "/icons/golang.svg",
            imgColor: "#fff",
            width: "70%",
            text: "Go / Gin Framework",
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
        <SkillContainer
          data={{
            imgUrl: "/icons/docker.svg",
            imgColor: "#fff",
            width: "70%",
            text: "Docker",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/postgres.svg",
            imgColor: "#fff",
            width: "70%",
            text: "PostgreSQL",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/mongodb.svg",
            imgColor: "#fff",
            width: "70%",
            text: "MongoDB",
          }}
        />
        <SkillContainer
          data={{
            imgUrl: "/icons/firebase.svg",
            imgColor: "#fff",
            width: "70%",
            text: "Firebase",
          }}
        />
      </div>
  );
}
