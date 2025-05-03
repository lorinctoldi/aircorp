import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { BannerProps } from 'types';
import { useRevealOnScroll } from 'hooks';

export default function Banner(props: BannerProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const showText = useRevealOnScroll(textRef);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        {props?.type === 'video' ? (
          <video
            src={props?.source}
            autoPlay
            preload="auto"
            playsInline
            loop
            muted
            width="1920"
            height="1080"
            poster={props?.poster}
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={props?.source}
            alt=" "
            sizes="1321px"
            loading="lazy"
            width="2880"
            height="1804"
          />
        )}
      </div>
      <div ref={textRef} className="max-w-[900px] flex flex-col text-center">
        <div
          className="text-3xl leading-none text-white transition-all duration-700 ease-out transform delay-400 text-balance lg:text-7xl"
          style={{
            opacity: showText ? 100 : 0,
            transform: `translateY(${showText ? '0%' : '-100%'})`,
          }}
        >
          {props?.title}
        </div>
        {props?.link && (
          <div className="flex justify-center w-full pt-11 lg:pt-8">
            <div
              className="px-4 py-1 text-xl text-white transition-all duration-700 ease-out delay-500 transform bg-white bg-opacity-25 rounded-full cursor-pointer w-fit backdrop-blur-md lg:text-xl"
              style={{
                opacity: showText ? 100 : 0,
                transform: `translateY(${showText ? '0%' : '-100%'})`,
              }}
            >
              <Link to={props?.link}>{props?.linkTitle}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
