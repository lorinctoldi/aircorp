import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useRevealOnScroll } from 'hooks';
import { HeroProps } from 'types';

export default function Hero(props: HeroProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const showText = useRevealOnScroll(textRef);

  const isImageOnly =
    props.type === 'image' && !props.title && !props.description;

  return (
    <section
      className={`${isImageOnly ? 'h-auto' : 'h-[80vh]'} w-full p-5 bg-white md:p-7 lg:h-screen lg:p-16 aspect-video`}
    >
      <div className="relative flex items-end justify-start h-full px-6 pb-12 overflow-hidden md:px-4 md:pb-20 lg:px-14 lg:pb-20">
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          <div className="w-full h-full">
            {props.type === 'video' ? (
              <video
                src={props.source}
                autoPlay
                preload="auto"
                playsInline
                loop
                muted
                width="1920"
                height="1080"
                poster={props.poster}
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={props.source}
                alt=" "
                className="object-cover w-full h-full"
                width="1920"
                height="2000px"
              />
            )}
          </div>
        </div>
        <div ref={textRef} className="z-20 text-white">
          {props.title && (
            <h1
              className="text-2xl leading-6 transition-all duration-700 ease-out transform lg:text-6xl lg:leading-none"
              style={{
                opacity: showText ? 100 : 0,
                transform: `translateY(${showText ? '0%' : '2rem'})`,
              }}
            >
              {props.title}
            </h1>
          )}

          {props.description && (
            <div
              className="pt-1 text-2xl leading-6 text-white transition-all duration-700 ease-out transform opacity-60 lg:pt-2 lg:text-3xl lg:leading-7 delay-400"
              style={{
                opacity: showText ? 100 : 0,
                transform: `translateY(${showText ? '0%' : '2rem'})`,
              }}
            >
              {props.description}
            </div>
          )}

          {props.link && props.linkTitle && (
            <div
              className="flex w-full pt-6 transition-all duration-700 ease-out delay-500 transform md:pt-5 lg:pt-6"
              style={{
                opacity: showText ? 100 : 0,
                transform: `translateY(${showText ? '0%' : '2rem'})`,
              }}
            >
              <Link
                className="px-4 py-1 text-white bg-white bg-opacity-25 rounded-full cursor-pointer w-fit text-4 backdrop-blur-md lg:text-lg"
                to={props.link}
              >
                {props.linkTitle}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
