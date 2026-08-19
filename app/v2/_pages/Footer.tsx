import Github from '@/public/icons/github.svg';
import Whatsapp from '@/public/icons/whatsapp.svg';
import Email from '@/public/icons/email.svg';

export default function FooterPage() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden pb-10 border-t border-white/10">
      <div className="hidden md:absolute w-100 h-1 border-t border-white/10 rotate-30"></div>
      <div
        className={`
          container px-4 md:px-6 z-10 items-center justify-center
          `}
      >
        <div className="relative inset-0 pt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">IMFIEKRI</h1>
              <div className="flex gap-2 justify-start items-center">
                <a
                  href="https://github.com/Iqbal-Maulana67"
                  target="_blank"
                  className="group"
                  title="GitHub"
                >
                  <Github className="w-5 fill-white group-hover:fill-white/70 transition-all" />
                </a>
                <a
                  href="https://wa.me/+6283833848095"
                  target="_blank"
                  className="group"
                  title="Whatsapp"
                >
                  <Whatsapp className="w-5 fill-[#67C15E] group-hover:fill-[#67C15E]/70 transition-all" />
                </a>
                <a
                  href="mailto:im.fiekri@gmail.com?subject=Hello%20Iqbal&body=I%20want%20to%20contact%20you."
                  target="_blank"
                  className="group"
                  title="Email"
                >
                  <Email className="w-6 stroke-blue-500 group-hover:stroke-blue-500/70 transition-all" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-slate-400 font-mono">
                A Fullstack Developer with experience across various frontend
                and backend technologies, focused on building scalable,
                efficient, and well-structured web applications from concept to
                deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
