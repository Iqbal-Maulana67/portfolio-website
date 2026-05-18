'use client';

import SwiperCustomNav from '@/components/v2/ui/project-gallery';
import { useFadeInView } from '@/hooks/useInFadeView';
import 'swiper/css';

export default function Leaf() {
  const bgFade = useFadeInView();
  const contentFade = useFadeInView();

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden mb-20">
      <div
        ref={bgFade.ref}
        className={`container px-4 md:px-6 z-10 items-center justify-center
          ${bgFade.visible ? 'animate-[fadeUp_0.5s_ease-out_forwards] opacity-100' : 'opacity-0'}
          `}
      >
        <div className="relative max-w-5xl mx-auto mt-20">
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
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#ac47ff]/30 hover:bg-[#ac47ff]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Featured
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#78C257]/30 hover:bg-[#78C257]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Android
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#ff6f00]/30 hover:bg-[#ff6f00]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Machine Learning
            </div>
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#0A2540]/30 hover:bg-[#0A2540]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
              Created 2025
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
            Leaf Classification App
          </span>
          <p className="text-xl text-gray-400 mt-2"></p>
          <div className="w-full mt-20 flex justify-center">
            <img src="/images/leaf.png" alt="" className="rounded-2xl" />
          </div>

          <div className="w-full mt-20 flex flex-wrap justify-between overflow-hidden">
            <div className="w-[70%] pr-5">
              <p className="text-2xl font-bold">Overview</p>
              <p className="mt-5 text-md text-gray-400 text-justify">
                An application that assists in identifying wild plants through
                leaf image analysis and supports the understanding of their
                medicinal benefits. The system is designed to automatically
                classify plant species based on visual patterns from leaf images
                using deep learning techniques, specifically a Convolutional
                Neural Network with the ResNet-50 architecture. By doing so, it
                helps users recognize medicinal plants more efficiently and
                accurately compared to manual identification, while also
                providing useful information about the potential health benefits
                of each plant. This makes the application a practical tool for
                plant identification and for promoting easier access to
                knowledge about herbal and medicinal plants.
              </p>
            </div>

            <div className="w-[30%]">
              <p className="text-2xl font-bold text-justify">Tech Stack</p>
              <div className="w-full overflow-hidden px-2 mt-5 ">
                <div className="flex items-center">
                  <span className="mr-3 text-gray-400">Frontend</span>
                  <hr className="w-full text-gray-400" />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#0553B1]/30 hover:bg-[#0553B1]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Flutter
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="mr-3 text-gray-400">Backend</span>
                  <hr className="w-full text-gray-400" />
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#0c4b33]/30 hover:bg-[#0c4b33]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Django
                  </div>
                  <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-[#ff6f00]/30 hover:bg-[#ff6f00]/40 text-foreground border-white/20 py-1.5 px-4 text-xs">
                    Tensorflow
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <p className="text-2xl font-bold text-justify">Project Gallery</p>
              <SwiperCustomNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
