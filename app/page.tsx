import getProducts from "@/components/getProducts";
import Link from "next/link";
import { TbClick } from "react-icons/tb";

const HomePage = async () => {
  const posts = await getProducts({ limit: 5, page: 1 });
  return (
    <>
      <div className="mt-6 grid grid-flow-row grid-cols-2 border-b border-black pb-3">
        <h1 className="pl-5 text-lg font-bold text-slate-600">
          블로그 최신 글
        </h1>
        <Link href={`/blog`} className="inline-flex place-self-end">
          <TbClick className="mr-2" size="20" />
          <h1 className="mr-8 text-sm text-slate-500 hover:underline">
            전체글 보기
          </h1>
        </Link>
      </div>
      <div>
        {posts.products?.map((post, i) => {
          return (
            <Link href={`/posts/${post.slug}`}>
              <div
                key={i}
                className="grid grid-flow-row grid-cols-3 gap-2 border-b border-gray-300 p-2"
              >
                <p className="col-span-2 truncate pr-1 text-left font-bold text-gray-700 decoration-violet-400 decoration-double hover:underline">
                  {post.title}
                </p>
                <p className="truncate text-right text-sm text-slate-400">
                  {post.date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
