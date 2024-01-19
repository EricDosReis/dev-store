import Image from 'next/image';
import Link from 'next/link';

import { api } from '@/data/api';
import type { Product } from '@/data/types/product';

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 3600, // 1 hour
    }
  });
  const products = response.json();

  return products;
}

export default async function Home() {
  const products = await getFeaturedProducts();
  const [highlightedProduct, ...otherProducts] = products;

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-150"
          src={highlightedProduct.image}
          height={860}
          width={860}
          alt={highlightedProduct.title}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
          <span className="text-small truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map(({ id, image, price, slug, title }) => (
        <Link
          key={id}
          href={`product/${slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-150"
            src={image}
            height={860}
            width={860}
            alt={title}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
            <span className="text-small truncate">{title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {
                price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
