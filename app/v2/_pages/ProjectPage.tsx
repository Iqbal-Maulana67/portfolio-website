'use client';

import ProjectContainer from '@/components/v2/project/ProjectContainer';
import { useFadeInView } from '@/hooks/useInFadeView';

export default function ProjectPage() {
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
        <div className="relative max-w-8xl mx-auto text-center mb-20">
          <div
            className="inline-flex items-center rounded-full border 
          font-semibold transition-colors focus:outline-none focus:ring-2 
          focus:ring-ring focus:ring-offset-2 mb-4 bg-white/10 hover:bg-white/20 
          text-foreground border-white/20 py-1.5 px-4 text-xs"
          >
            Project
          </div>
          <h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-4xl mb-5">
            Featured Project
          </h1>
          <p className="text-mute-foreground text-xl max-w-2xl mx-auto mb-5 font-medium">
            A showcase of projects demonstrating my skills in building modern
            applications and intelligent systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ProjectContainer
            thumbnailPath="/images/numes.png"
            title="Numes Academy"
            description="This platform is specifically designed to digitize and centralize the registration, delivery, and certification process of medical training programs under Nusantara Medika Solusindo."
            techs={['Next.js', 'NestJS']}
            link="/projects/numes-academy"
          />
          <ProjectContainer
            thumbnailPath="/images/leaf.png"
            title="Leaf Classification App"
            description="An apps that helps identifying plant throughout the plant's leaf and helps understanding the medical benefits of the plants."
            techs={['Flutter', 'Tensorflow', 'Django']}
            link="/projects/leaf-classification-app"
          />
          <ProjectContainer
            thumbnailPath="/images/bot.png"
            title="Valk Bot"
            description="A telegram moderation bot handling a spam, content filtering, welcoming messages, user reports, log & audit, and etc."
            techs={['Python', 'Telegram Python Bot']}
            link="/projects/valk-bot"
          />
        </div>
      </div>
    </div>
  );
}
