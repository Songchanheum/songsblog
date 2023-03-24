import getProducts from "@/components/getProducts";
import Link from "next/link";
import { TbClick } from "react-icons/tb";

const HomePage = async () => {
  const posts = await getProducts({ limit: 5, page: 1 });
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row mt-6 pb-3 border-b border-black">
        <h1 className="pl-5 text-lg text-slate-600 font-bold">
          블로그 최신 글
        </h1>
        <Link href={`/blog`} className="inline-flex place-self-end">
          <TbClick className="mr-2" size="20" />
          <h1 className="hover:underline text-sm mr-8 text-slate-500">
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
                className="grid grid-cols-3 grid-flow-row gap-2 border-b p-2 border-gray-300"
              >
                <p className="pr-1 col-span-2 text-left text-slate-800">
                  {post.title}
                </p>
                <p className="text-slate-400 text-right text-sm">{post.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
