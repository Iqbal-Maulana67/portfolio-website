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
          <div className="grid grid-cols-2 ">
            <div>
              <h1 className="text-xl font-semibold">IMFIEKRI</h1>
            </div>
            <div>
              <h1 className="text-md font-light text-right">
                Built using Next.js & Tailwind CSS
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
