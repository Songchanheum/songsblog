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

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const matterResult = getPostContent(slug);
  return (
    <p>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-violet-600 font-bold text-center">
          {matterResult.data.title}
        </h1>
        <p className="text-slate-400 mt-2">{matterResult.data.date}</p>
        {matterResult.data.baseimage ? (
          <Image
            src={`/images/baseImage/${matterResult.data.baseimage}`}
            width={400}
            height={280}
            className="mx-auto"
          />
        ) : (
          ""
        )}
      </div>
      <article className="prose lg:prose-lg">
        <Markdown>{matterResult.content}</Markdown>
      </article>
    </p>
  );
};

export default PostPage;
