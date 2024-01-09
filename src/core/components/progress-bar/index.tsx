import React, {useState,useEffect} from 'react'

type Props = {
  value: number
  max: number
  color: string
  label?: string
}

const getBackgroundColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-600'
    case 'lime':
      return 'bg-[#28a909]'
    case 'yellow':
      return 'bg-yellow-400'
    case 'amber':
      return 'bg-amber-600'
    case 'red':
      return 'bg-red-700'
    case 'pink':
      return 'bg-pink-700'
    case 'rose':
      return 'bg-rose-700'
    case 'gray':
      return 'bg-gray-400'
  }
}

export default function ProgressBar({
  max,
  value,
  color,
  label = 'Próxima Rodada em',
}: Props) {


  const [dynamicColor, setDynamicColor] = useState<string | undefined>(getBackgroundColor(color));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDynamicColor((prevColor) => (prevColor === 'bg-red-700' ? 'bg-[#28a909]' : 'bg-red-700'));
    }, 990*10);
    

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full relative flex items-center border border-gray-500 bg-gray-600 bg-opacity-50 border-opacity-50 rounded-md h-6 dark:bg-gray-700">
      <div
        className={`${dynamicColor} h-full transition-all duration-100 rounded-md`}
        style={{
          width: `${(value / max) * 100}%`,
          transitionTimingFunction: 'linear',
          transitionDuration: '990ms',
        }}
      ></div>

      <small className="absolute w-full h-full font-semibold text-center text-xs  pointer-events-none flex items-center justify-center text-gray-200 uppercase">
        {label} {Math.abs(value)}
      </small>
    </div>
  )
}
