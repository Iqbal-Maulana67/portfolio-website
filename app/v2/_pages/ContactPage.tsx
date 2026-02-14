'use client';

import { useFadeInView } from '@/hooks/useInFadeView';

export default function ContactPageV2() {
  const bgFade = useFadeInView();
  const contentFade = useFadeInView();

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden mb-10">
      <div
        ref={bgFade.ref}
        className={`
          container px-4 md:px-6 z-10 items-center justify-center
          ${bgFade.visible ? 'animate-[fadeUp_0.5s_ease-out_forwards] opacity-100' : 'opacity-0'}
          `}
      >
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div
            ref={contentFade.ref}
            className={`
              relative z-10 py-16 px-6 md:px-12 text-center
              ${contentFade.visible ? 'animate-[fadeUp_0.5s_ease-out_forwards] opacity-100' : 'opacity-0'}
              `}
          >
            <div
              className="inline-flex items-center rounded-full 
            border text-xs font-semibold transition-colors 
            focus:outline-none focus:ring-2 focus:ring-ring 
            focus:ring-offset-2 mb-6 bg-white/10 hover:bg-white/20 
            text-foreground border-white/20 py-1 px-3"
            >
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s build something together.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities and ideas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/+6283833848095" target="_blank">
                <div
                  className="inline-flex items-center rounded-full border 
                font-semibold transition-colors focus:outline-none focus:ring-2 
                focus:ring-ring focus:ring-offset-2 mb-4 bg-green-500/20 
                hover:bg-green-500/30 text-foreground border-white/20 py-1.5 
                px-4 text-sm cursor-pointer"
                >
                  Whatsapp
                </div>
              </a>
              <a href="https://wa.me/+6283833848095" target="_blank">
                <div
                  className="inline-flex items-center rounded-full border 
                font-semibold transition-colors focus:outline-none focus:ring-2 
                focus:ring-ring focus:ring-offset-2 mb-4 bg-gray-900/10 
                hover:bg-gray-900/40 text-foreground border-white/20 py-1.5 
                px-4 text-sm cursor-pointer"
                >
                  GitHub
                </div>
              </a>
              <a
                href="mailto:im.fiekri@gmail.com?subject=Hello%20Iqbal&body=I%20want%20to%20contact%20you."
                target="_blank"
              >
                <div
                  className="inline-flex items-center rounded-full border 
                font-semibold transition-colors focus:outline-none focus:ring-2 
                focus:ring-ring focus:ring-offset-2 mb-4 bg-blue-600/10 
                hover:bg-blue-600/40 text-foreground border-white/20 py-1.5 
                px-4 text-sm cursor-pointer"
                >
                  Email
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
