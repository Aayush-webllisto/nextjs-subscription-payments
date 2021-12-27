import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';

interface Props {
  products: Product[];
}

console.log('egt product 1',products)

export default function PricingPage({ products }: Props) {
  return <Pricing products={products} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

console.log('egt product 2',products)
  return {
    props: {
      products
    },
    revalidate: 60
  };
}
