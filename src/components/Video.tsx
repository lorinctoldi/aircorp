import { useState, useEffect } from 'react';
import { useLockBodyScroll } from 'hooks';
import { VideoProps } from '@/types';

export default function Video({ image, source, poster }: VideoProps) {
  const darkMode = true;

  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleVideo = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowOverlay(true);
      }, 100);
    } else {
      setShowOverlay(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };

  useLockBodyScroll(isOpen);

  return (
    <section className="w-full">
      {isOpen && (
        <div
          className={`top-0 left-0 z-50 w-screen h-screen transition-all duration-1000 pointer fixed ${showOverlay ? 'bg-black bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'}`}
        >
          <div className="relative w-full h-full">
            <div className="flex items-center justify-center w-full h-full">
              <video
                src={source}
                controls={true}
                preload="none"
                playsInline
                muted
                poster={poster}
                autoPlay
                className={`w-11/12 max-w-[1200px] aspect-video rounded-md  transition-all duration-1000  ${showOverlay ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
              />
            </div>
            <button
              className={`absolute top-0 right-0 w-16 h-16 transition-all duration-1000 delay-200 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => toggleVideo()}
            >
              <div className="flex items-center justify-center w-full h-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8"
                >
                  <path
                    d="M16.2604 1L0.999512 16.2609"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M16.2604 16.2609L0.999512 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center w-full px-6 py-16 md:px-8 lg:px-16">
        <div className="relative w-full">
          <div className="w-full aspect-[9/12] lg:aspect-video">
            <img
              src={image}
              alt=" "
              loading="lazy"
              className="object-cover h-full lg:h-auto lg:w-full"
            />
          </div>
          <button
            className="absolute w-[3.8rem] lg:w-[6.2rem] h-[2.4rem] lg:h-[3.8rem] -translate-y-1/2 bg-black backdrop-blur-md bg-opacity-50 rounded-[10rem] text-white pointer -translate-x-1/2 top-1/2 left-1/2 lg:hover:h-[4.2rem] lg:hover:w-[6.6rem] hover:h-[2.7rem] hover:w-[4.1rem] transition-all duration-300 hover:bg-opacity-30"
            onClick={() => toggleVideo()}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block object-contain w-full h-full"
            >
              <path
                d="M11.9238 8.99971L7.53633 11.5328L7.53633 6.46658L11.9238 8.99971Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
