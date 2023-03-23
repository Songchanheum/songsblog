import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import getProducts from "@/components/getProducts";

export const dynamicParams = true;
const PER_PAGE = 5;

const productPaging = async () => {
  const page = 1;
  const { products, total } = await getProducts({ limit: PER_PAGE, page });

  if (!products.length) {
    return {
      notFound: true,
    };
  }

  return {
    products,
    totalProducts: total,
    currentPage: 1,
  };
};
export default async function PaginatedPage(props: any) {
  const { products, currentPage, totalProducts } = await productPaging();

  const postPreviews = products?.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
      <Pagination
        totalItems={totalProducts === undefined ? 0 : totalProducts}
        currentPage={currentPage === undefined ? 0 : currentPage}
        itemsPerPage={PER_PAGE}
        renderPageLink={(page) => `/blog/${page}`}
      />
    </div>
  );
}
export const generateStaticParams = async () => {
  return [{ temp: "list" }, { temp: "grid" }];
};
