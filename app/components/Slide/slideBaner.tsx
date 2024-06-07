import { useRef, useEffect, Children, useState } from "react";

type SlideBannerProps = {
  children: React.ReactNode;
};

const SlideBanner = ({ children }: SlideBannerProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollInterval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const nextIndex = (currentIndex + 1) % Children.count(children);
        const nextChild = slider.children[nextIndex] as HTMLElement;
        const nextChildRect = nextChild.getBoundingClientRect();
        slider.scrollTo({
          left: nextChildRect.left + slider.scrollLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(nextIndex);
      }
    }, 10000);

    return () => clearInterval(scrollInterval);

  }, [children, currentIndex]);

  return (
    <div className="overflow-hidden flex justify-center items-center">
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  );
};

export { SlideBanner };
