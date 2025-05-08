import { PartnersProps } from 'types';

export default function Partners({
  title,
  subtitle,
  description,
  images,
}: PartnersProps) {
  return (
    <section className="w-full px-6 my-14 md:px-4 lg:px-14">
      {title && (
        <h2 className="pb-6 text-3xl leading-6 tracking-[-0.02em] text-white transition-all duration-700 ease-out transform lg:text-[45px] lg:leading-none">
          {title}
        </h2>
      )}
      <div className="flex flex-col border-t border-light-gray gap-[12px] pt-5">
        {subtitle && (
          <h3 className="text-2xl leading-[1.1] max-w-[500px] text-white">
            {subtitle}
          </h3>
        )}
        {description && (
          <p className="text-balance max-w-[375px] text-lg text-lighter-gray leading-[1.1]">
            {description}
          </p>
        )}
        {images?.length && (
          <div className="flex items-center gap-y-[40px] gap-x-[24px] justify-center md:justify-between pb-[70px] pt-[50px] md:pb-[100px] md:pt-[80px] w-full md:gap-x-20 md:gap-y-0 flex-wrap">
            {images.map((image, index) => {
              return (
                <div className="md:flex-1 overflow-hidden w-[calc(33.33333%-24px)] md:w-auto">
                  <img
                    className="max-w-[120px] max-h-[70px] md:max-w-[300px] md:max-h-[110px] w-full object-contain h-auto"
                    key={index}
                    src={image.source}
                    alt={image.alt}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
