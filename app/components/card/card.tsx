import Image from "next/image";
import { Play } from "lucide-react";
import { HTMLAttributes } from "react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  title: string;
  id: number | string;
  poster_path: string;
};

const Card: React.FC<CardProps> = ({ title, id, poster_path, ...props }) => {
  return (
    <>
      <div className="w-[250px] h-[375px] bg-neutral-700 rounded overflow-hidden cursor-pointer flex-shrink-0 mx-2 transition-opacity duration-500 max-md:w-[200px] max-md:h-[325px] " {...props} key={id}>

        <abbr title={title} className="relative block w-full h-full group">

          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width={200}
            height={250}
            className="w-full h-full bg-cover object-cover hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

          <Play className="bg-transparent w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-violet-700 border-solid border-8 border-violet-700 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </abbr>

      </div>
    </>
  );
};

export { Card };
