import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  dark?: boolean;
}

export function Phone({ className, imgSrc, dark = false, ...props }: Props) {
  const phoneTemplateImageSrc = dark
    ? '/phone-template-dark-edges.png'
    : '/phone-template-white-edges.png';

  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={phoneTemplateImageSrc}
        alt='phone-image'
        className="pointer-events-none select-none z-50"
      />

      <div className='absolute inset-0 -z-10'>
        <img
          src={imgSrc}
          alt='overlaying phone image'
          className='object-cover'
        />
      </div>
    </div>
  )
}
