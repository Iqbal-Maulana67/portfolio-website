'use client';

import SwiperCustomNav from '@/components/v2/ui/project-gallery';
import { useFadeInView } from '@/hooks/useInFadeView';
import Link from 'next/link';
import 'swiper/css';

export default function Leaf() {
  const bgFade = useFadeInView();
  const contentFade = useFadeInView();

  const slides = [
    { id: 1, imgPath: '/images/numes.png' },
    { id: 2, imgPath: '/images/numes_2.png' },
    { id: 3, imgPath: '/images/numes_3.png' },
    { id: 4, imgPath: '/images/numes_4.png' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden mb-20">
      <div
        ref={bgFade.ref}
        className={`container px-4 md:px-6 z-10 items-center justify-center
          ${bgFade.visible ? 'animate-[fadeUp_0.5s_ease-out_forwards] opacity-100' : 'opacity-0'}
          `}
      >
        <div className="relative max-w-5xl mx-auto mt-20">
          <Link href={'/projects'}>
            <div className="flex items-center group cursor-pointer">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 476.213 476.213"
                className=" w-5 group-hover:w-6 mr-5 fill-gray-400 group-hover:fill-white duration-200"
              >
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon>{' '}
                </g>
              </svg>
              <span className="text-sm text-gray-400 group-hover:text-white duration-200">
                Back to Project
              </span>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#ac47ff]/30 hover:bg-[#ac47ff]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Featured
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#78C257]/30 hover:bg-[#78C257]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Website
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#0A2540]/30 hover:bg-[#0A2540]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Created 2026
            </div>
          </div>
          <span
            className={`
              bg-gradient-to-r 
              from-blue-500  to-purple-500 
              bg-clip-text text-transparent
              font-bold
              text-5xl
            `}
          >
            Numes Academy
          </span>
          <p className="text-xl text-gray-400 mt-2">Full-stack Developer</p>
          <div className="w-full mt-8 flex justify-center">
            <img src="/images/numes.png" alt="" className="rounded-2xl" />
          </div>

          <div className="w-full mt-20 flex flex-wrap justify-between overflow-hidden">
            <div className="w-full md:w-[70%] pr-5">
              <p className="text-2xl font-bold">Overview</p>
              <p className="mt-5 text-md text-gray-400 text-justify">
                A digital platform that assists healthcare professionals and
                institutions in accessing standardized medical training and
                obtaining recognized certification. The system is designed to
                centralize the entire training lifecycle—from program
                registration and scheduling to online payment, learning
                delivery, and digital certificate issuance—within a single
                integrated web-based platform. By doing so, it helps
                participants and institutions manage training more efficiently
                and transparently compared to conventional manual processes,
                while also ensuring that every issued certificate can be
                verified for authenticity through a unique digital code. This
                makes the platform a practical tool for professional development
                in the medical field and for promoting easier access to
                credible, verifiable training and certification for healthcare
                workers across Indonesia.
              </p>
            </div>
            <div className="w-full mt-10 md:w-[30%]  md:mt-0">
              <p className="text-2xl font-bold text-justify">Tech Stack</p>
              <div className="w-full overflow-hidden px-2 mt-5 ">
                <div className="flex items-center">
                  <span className="mr-3 text-gray-400">Frontend</span>
                  <hr className="w-full text-gray-400" />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#353535]/30 hover:bg-[#353535]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Next.js
                  </div>
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#00bcff]/30 hover:bg-[#00bcff]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Tailwinds
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="mr-3 text-gray-400">Backend</span>
                  <hr className="w-full text-gray-400" />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#353535]/30 hover:bg-[#353535]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Nest.js
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <p className="text-2xl font-bold text-justify mb-10">
                Project Gallery
              </p>
              <SwiperCustomNav slides={slides} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
