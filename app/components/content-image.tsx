import Image from 'next/image';
import { Loading } from './loading';

export interface ContentImageProps {
  data: {
    poster_path?: string;
    name?: string;
    isLoading?: boolean;
  };
}

const ContentImage = ({ data }: ContentImageProps) => {
  const { poster_path, name, isLoading } = data;

  return (
    isLoading ? (<Loading/>) : (
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={name ?? ''}
        width={240}
        height={310}
        className='bg-cover hover:scale-110 transition duration-500'
      />
    )
  );
};

export { ContentImage };
