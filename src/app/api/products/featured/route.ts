import { delay } from '@/data/delay';
import data from '../data.json';

export async function GET() {
  await delay();

  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
}
