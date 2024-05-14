import Image from 'next/image';

export interface ContentImageProps {
  data: {
    poster_path?: string;
    name?: string;
  };
}

const ContentImage = ({ data }: ContentImageProps) => {
  const { poster_path, name } = data;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      alt={name ?? ''}
      width={240}
      height={310}
      className='bg-cover'
    />
  );
};

export { ContentImage };
