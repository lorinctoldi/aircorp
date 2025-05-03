import { TableProps } from 'types';

export default function Table({ items, darkMode }: TableProps) {
  return (
    <div
      className={`w-full px-6 pt-4 pb-4 md:px-8 lg:px-16 ${darkMode ? 'bg-darker-gray text-white border-white' : 'bg-white text-dark-gray border-light-gray'}`}
    >
      {items.map(({ key, value }, index) => {
        return (
          <div
            className={`w-full  md:flex md:justify-between  ${index === 0 ? 'border-t-2 pt-4 pb-16' : 'border-t-[0.5px] pt-1 pb-1 grid gap-4 grid-cols-[80px_1fr]'} ${index === items.length - 1 ? 'border-b' : ''}`}
          >
            <div className={`flex ${index === 0 ? '' : 'items-center'}`}>
              {index === 0 ? (
                <div className="mb-4 text-3xl font-medium md:text-7xl md:mb-0">
                  {key}
                </div>
              ) : (
                <div className="text-xs leading-none uppercase">{key}</div>
              )}
            </div>
            <div className="flex items-center w-full max-w-[600px]">
              <div
                className={`md:text-lg ${index === 0 ? 'text-lg' : 'text-md'}`}
              >
                {value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
