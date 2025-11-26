"use client";

export default function SkillContainer({ data }: { data: any }) {
  return (
    <div
      id="skill-container"
      className="p-5 w-1/4 text-center rounded-2xl flex flex-col relative m-2 items-center justify-end"
    >
      <img
        src={data.imgUrl}
        alt={data.text}
        style={{ fill: data.imgColor, width: data.width }}
        className="mt-auto"
      />
      <span className="opacity-0 mt-auto">{data.text}</span>
    </div>
  );
}
