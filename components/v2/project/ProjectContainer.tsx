'use client';

import Link from 'next/link';

interface ProjectContainerProps {
  title: string;
  thumbnailPath: string;
  description: string;
  techs: Array<string>;
  link: string;
}

export default function ProjectContainer({
  title = 'Project Title',
  thumbnailPath,
  description,
  techs,
  link,
}: ProjectContainerProps) {
  const MAX_LEN = 108;

  if (description.length > MAX_LEN) {
    description = description.slice(0, MAX_LEN - 1) + '...';
  }

  return (
    <Link href={link}>
      <div
        className={`group relative overflow-hidden rounded-2xl glass border border-white/10 
        transition-all duration-300 hover:border-purple-500/50 
        hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] block cursor-pointer`}
      >
        <div className="relative h-70 overflow-hidden">
          <img
            src={thumbnailPath}
            alt=""
            className="object-cover transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute w-10 h-10 bg-black/80 rounded-full right-1 bottom-1 flex items-center justify-center p-1">
              <img src="icons/click.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <div className="w-full px-4">
          <span className="text-md text-[#a1a1aa] text-justify">
            {description}
          </span>
        </div>
        <div className="flex gap-2 w-full px-4 my-3">
          {techs.map((name: string, index: number) => {
            return (
              <div
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-white/5 hover:bg-white/10 text-xs"
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
