import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params, searchParams }: Props) {
  const slug = params.slug;
  const matterResult = getPostContent(slug);

  return {
    title: matterResult.data.title,
    description: matterResult.data.subtitle,
    openGraph: {
      title: matterResult.data.title,
      description: matterResult.data.subtitle,
      url: `https://songsblog.vercel.app/posts/${slug}`,
    },
    twitter: {
      title: matterResult.data.title,
      description: matterResult.data.subtitle,
    },
  };
}

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = ({ params, searchParams }: Props) => {
  const slug = params.slug;
  const matterResult = getPostContent(slug);
  return (
    <p>
      <div className="my-12 text-center">
        <h1 className="text-center text-2xl font-bold text-violet-600 md:text-3xl lg:text-4xl">
          {matterResult.data.title}
        </h1>
        <p className="mb-3 mt-2 text-slate-400">{matterResult.data.date}</p>
        {matterResult.data.baseimage ? (
          <Image
            alt=""
            src={`/images/baseImage/${matterResult.data.baseimage}`}
            width={400}
            height={280}
            className="mx-auto"
          />
        ) : (
          ""
        )}
      </div>
      <article className="prose max-w-none lg:prose-lg">
        <Markdown>{matterResult.content}</Markdown>
      </article>
    </p>
  );
};

export default PostPage;
