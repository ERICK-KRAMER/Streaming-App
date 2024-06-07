import { useRef } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

type SlideProps = {
  children: React.ReactNode;
};

const Slide = ({ children }: SlideProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center">
      <button
        onClick={prevSlide}
        className="absolute h-full opacity-40 slide-group-hover:opacity-50 transition-opacity duration-300 left-0 z-10 bg-neutral-950 text-white p-2"
      >
        <ChevronLeftCircle />
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
      <button
        onClick={nextSlide}
        className="absolute h-full opacity-40 slide-group-hover:opacity-50 transition-opacity duration-300 right-0 z-10 bg-neutral-950 text-white p-2"
      >
        <ChevronRightCircle />
      </button>
    </div>
  );
};

export { Slide };
