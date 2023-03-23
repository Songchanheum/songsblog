import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import getProducts from "@/components/getProducts";
import Link from "next/link";

import { FiGrid, FiList } from "react-icons/fi";
export const dynamicParams = true;
const PER_PAGE = 10;

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

  const tempState = props.params.temp;
  const postPreviews = products?.map((post) => (
    <PostPreview
      key={post.slug}
      title={post.title}
      date={post.date}
      subtitle={post.subtitle}
      slug={post.slug}
      baseimage={post.baseimage}
      temp={tempState}
    />
  ));
  return (
    <div>
      <div className="text-right mb-1">
        <Link href={`/blog/list/${props.params.page}`}>
          <button
            className={
              tempState === "list"
                ? "bg-gray-400 p-2 rounded-md mr-1"
                : "bg-gray-300 p-2 rounded-md mr-1"
            }
          >
            <FiList size="20" />
          </button>
        </Link>
        <Link href={`/blog/grid/${props.params.page}`}>
          <button
            className={
              tempState === "grid"
                ? "bg-gray-400 p-2 rounded-md"
                : "bg-gray-300 p-2 rounded-md"
            }
          >
            <FiGrid size="20" />
          </button>
        </Link>
      </div>
      <div
        className={
          tempState === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""
        }
      >
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
