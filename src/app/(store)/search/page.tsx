
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { api } from '@/data/api';
import { delay } from '@/data/delay';
import type { Product } from '@/data/types/product';
import { formatToBrazilianCurrency } from '@/utils/format-to-brazilian-currency';

interface SearchPageProps {
  searchParams: {
    q: string;
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  await delay();

  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 3600, // 1 hour
    }
  });
  const products = response.json();

  return products;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams;

  if (!query) {
    redirect('/');
  }

  const products = await searchProducts(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <b>{query}</b>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map(({ id, image, price, slug, title }) => (
          <Link
            key={id}
            href={`product/${slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              className="group-hover:scale-105 transition-transform duration-150"
              src={image}
              height={480}
              width={480}
              alt={title}
              quality={100}
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-width[288px] rounded-full border-2 border-zinc-500  bg-black/60 p-1 pl-5">
              <span className="text-small truncate">{title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {formatToBrazilianCurrency(price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
