import React from 'react';
import { Link } from '@inertiajs/react';

const IsLength = (props) => {
  const { data, link } = props;
  if (!data) return;
  return (
    <Link
      href={link}>
        <div
          className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white flex items-center justify-center">
          <span className='text-xs opacity-50'>{data}</span>
        </div>
    </Link>
  )
}

const ImageStack = (props) => {
  const { data, length, link } = props;
  return (
    <div className='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5'>
      {
        Array.from(data)?.map((item, index) => (
          <Link
            key={index}
            title={item.Alt}
            href={item.Href}>
              <img
                src={item.Src}
                alt={item.Alt}
                className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                loading="lazy"
              />
          </Link>
        ))
      }
      <IsLength data={length} href={link} />
    </div>
  );
}

export default ImageStack;
