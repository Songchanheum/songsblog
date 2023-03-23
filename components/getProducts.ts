import getPostMetadata from "./getPostMetadata";

export default async function getProducts({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) {
  const products = getPostMetadata();
  const paginatedProducts = products.slice((page - 1) * limit, page * limit);
  return { products: paginatedProducts, total: products.length };
}
