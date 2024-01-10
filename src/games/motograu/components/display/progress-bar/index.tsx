import React, { useEffect, useState } from 'react';

type Props = {
  max: number;
  label?: string;
};

const getBackgroundColor = (value: number) => {
  const hue = (120 * ((10 - value) / 16)) / 100; // 
  const dynamicColor = `hsl(${hue * 120}, 100%, 50%)`;

  return dynamicColor;
};

export default function ProgressBar({ max, label = 'Próxima Rodada em' }: Props) {
  const [count, setCount] = useState(max);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dynamicColor = getBackgroundColor(count);

  return (
    <div className="w-full relative flex items-center border border-gray-500 bg-gray-600 bg-opacity-50 border-opacity-50 rounded-md h-6 dark:bg-gray-700">
      <div
        className="h-full transition-all duration-100 rounded-md"
        style={{
          background: dynamicColor,
          width: `${(count / max) * 100}%`,
          transitionTimingFunction: 'linear',
          transitionDuration: '1000ms', // 
        }}
      ></div>

      <small className="absolute w-full h-full font-semibold text-center text-xs pointer-events-none flex items-center justify-center text-gray-200 uppercase">
        {label} {count}
      </small>
    </div>
  );
}
