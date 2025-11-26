"use client";

export default function ContactContainer({ data }: { data: any }) {
  return (
    <a href={data.url}>
      <div className="p-2 mr-3 rounded-xl contact-logo-container flex justify-center items-center">
        <img src={data.imgUrl} className="h-10 contact-icons absolute" />
        <div className="flex justify-center items-center">
          <span className="">{data.text}</span>
        </div>
      </div>
    </a>
  );
}
