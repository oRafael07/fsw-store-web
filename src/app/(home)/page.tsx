import Image from "next/image";
import Categories from "./components/categories";
import { db } from "@/lib/prisma";
import { ProductList } from "./components/product-list";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: {
        gte: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 50% de desconto nesse mês"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
