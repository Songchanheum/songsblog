import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Pagination from "@/components/Pagination";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import getProducts from "@/components/getProducts";

export const dynamicParams = true;
export const PER_PAGE = 5;

type PageProps = {
  products: any[];
  currentPage: number;
  totalProducts: number;
};

const productPaging = async (props: any) => {
  const page = Number(props?.page) || 1;
  const { products, total } = await getProducts({ limit: PER_PAGE, page });

  if (!products.length) {
    return {
      notFound: true,
    };
  }

  return {
    products,
    totalProducts: total,
    currentPage: page,
  };
};
async function PaginatedPage(props: any) {
  const { products, currentPage, totalProducts } = await productPaging(props);

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
  return Array.from({ length: 5 }).map((_, i) => `/blog/${i + 2}`);
};

export default PaginatedPage;
