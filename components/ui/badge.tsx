import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  image?: React.ReactNode;
  type: 'chips' | 'link';
}

export const Badge: React.FC<Props> = ({ name, image, type }) => {
  return type === 'link' ? (
    <Link href="/" className="w-20 h-20 flex justify-center items-center gap-2 bg-white text-dark rounded-full text-3xl cursor-pointer">
      {image}
    </Link>
  ) : (
    <div className="flex items-center gap-2 text-dark  border border-dark rounded-14 px-2 py-px text-sm font-medium cursor-pointer">
      {name}
    </div>
  );
};

