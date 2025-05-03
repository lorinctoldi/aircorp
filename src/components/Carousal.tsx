import { useState, useEffect, useRef } from 'react';
import { CarousalProps } from 'types';

export default function Carousal({ items }: CarousalProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) setCurrentIndex(Math.min(currentIndex + 1, items.length));
    if (isRightSwipe) setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const onMouseDown = (e: MouseEvent) => {
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (mouseStart !== null) {
      setMouseEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (mouseStart === null || mouseEnd === null) return;
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    setMouseStart(null);
    setMouseEnd(null);
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (e.preventDefault) {
        e.preventDefault();
      }
    };

    const item = ref.current;
    if (!item) return;

    item.addEventListener('mousedown', onMouseDown);
    item.addEventListener('mousemove', onMouseMove);
    item.addEventListener('mouseup', onMouseUp);

    return () => {
      item.removeEventListener('mousedown', onMouseDown);
      item.removeEventListener('mousemove', onMouseMove);
      item.removeEventListener('mouseup', onMouseUp);
    };
  }, [touchStart, touchEnd, mouseStart, mouseEnd]);

  return (
    <div className="relative w-full h-auto p-5 bg-white md:p-7 lg:h-screen lg:p-16 aspect-video">
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={ref}
        className="relative flex items-end justify-start h-full px-6 pb-12 overflow-hidden md:px-4 md:pb-20 lg:px-14 lg:pb-2"
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          <div
            className="flex w-full h-full transition-transform duration-700"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {items.map((item, index) => {
              return (
                <div key={index} className="w-full h-full flex-[0_0_100%]">
                  {item.type === 'video' ? (
                    <video
                      src={item.source}
                      autoPlay
                      preload="auto"
                      playsInline
                      loop
                      muted
                      poster={item.poster}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={item.source}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full">
          <div className="flex justify-center pb-[4%]">
            <div className={`flex gap-4 justify-center w-6/10`}>
              {items.map((_, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="py-[2%] h-[2px] w-1/10 cursor-pointer group"
                  >
                    <div
                      className={`w-full h-[2px] bg-white rounded-full transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-25'
                      } group-hover:opacity-100`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
