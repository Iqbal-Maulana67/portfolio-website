'use client';

import Image from 'next/image';

interface TechCardProps {
  dict: any;
}

const TechCard = ({ dict }: TechCardProps) => {
  return (
    <div id="tech-card"
      className={`glass rounded-2xl min-w-sm min-h-full transition-colors px-4 py-4 ${dict.className}`}
    >
      <style jsx>{`
        .glass:hover {
          border: 1px solid ${dict.color};
        }
          
        .glass:after:hover {
          filter: blur(40px);
          z-index: -2;
        }
      `}</style>
      <div className={`flex rounded items-center gap-4 mb-4`}>
        <div className={`rounded-full p-2 text-center ${dict.iconClassName}`}>
          <Image src={dict.image} alt="" width={25} height={10} />
        </div>
        <span className="font-semibold">{dict.headerName}</span>
      </div>
      <div className="px-2">
        {dict.list.map((data: string, index: number) => {
          return (
            <div className="flex items-center gap-3 mb-4" key={index}>
              <div
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: dict.color }}
              ></div>
              <span>{data}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCard;
