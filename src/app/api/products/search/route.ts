import type { NextRequest } from 'next/server';
import { z } from 'zod';

import { delay } from '@/data/delay';
import data from '../data.json';

export async function GET(
  request: NextRequest,
) {
  await delay();

  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get('q'));
  const products = data.products.filter((product) => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

  return Response.json(products);
}
