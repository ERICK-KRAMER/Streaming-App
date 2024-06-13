import { useState } from 'react';
import Image from 'next/image';
import { LoadingImage } from './loading';

export interface ContentImageProps {
  data: {
    poster_path?: string;
    name?: string;
    isLoading?: boolean;
  };
}

const ContentImage = ({ data }: ContentImageProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { poster_path, name, isLoading } = data;

  return (
    <div className='relative w-full h-full'>
      
      {(isLoading || isImageLoading) && (
        <div className='w-full h-full hover:scale-110 transition duration-500'>
          <LoadingImage/>
        </div>
      )}

      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={name ?? ''}
        width={240}
        height={310}
        className={`w-full h-full bg-cover transition duration-500 hover:scale-110 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsImageLoading(false)}
      />
    </div>
  );
};

export { ContentImage };
