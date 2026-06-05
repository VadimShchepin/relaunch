import React from 'react';

type ArticleHeroImageProps = {
  src: string;
  alt: string;
  caption: string;
};

export const ArticleHeroImage: React.FC<ArticleHeroImageProps> = ({ src, alt, caption }) => (
  <figure className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl shadow-black/10">
    <img
      src={src}
      alt={alt}
      width={1672}
      height={941}
      loading="eager"
      className="aspect-[16/9] h-auto w-full object-cover"
    />
    <figcaption className="border-t border-black/5 bg-white px-5 py-4 text-sm leading-relaxed text-gray-500 md:px-6">
      {caption}
    </figcaption>
  </figure>
);
