import ProjectContainer from '@/components/v2/project/ProjectContainer';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden mb-20">
      <div
        className={`container px-4 md:px-6 z-10 items-center justify-center
          ${'animate-[fadeUp_0.5s_ease-out_forwards] opacity-100'}
          `}
      >
        <div className="relative max-w-5xl mx-auto mt-30 text-center py-5 px-20">
          <p
            className={`
              bg-gradient-to-r 
              from-blue-500  to-purple-500 
              bg-clip-text text-transparent
              font-semibold
              text-4xl
            `}
          >
            My Work
          </p>
          <p className="text-xl text-gray-400 mt-5">
            Code, experiments, and side projects I've shipped over the years.
            Each one a different problem, a different stack, a different lesson.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8 px-5">
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
          <ProjectContainer
            thumbnailPath="/images/akus_cropped.png"
            title="A-KUS"
            description="This digital platform is specifically designed to optimize transparency and accuracy of fund management within the SMA U BPPT Darus Sholah environtment"
            techs={['Laravel', 'Bootstrap', 'SB Admin']}
            link="/projects/a-kus"
          />
        </div>
        <div className="glass rounded-2xl py-10 px-2 border border-white/10 text-center mx-8">
          <h2 className="text-2xl font-bold mb-4">Available for Collaboration</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether it's a project or just an idea — my inbox is always open.
          </p>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white rounded-full px-8"
            href="https://wa.me/+6283833848095" target="_blank"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </div>
  );
}
