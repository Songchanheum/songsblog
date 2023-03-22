import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

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
      <h1>{matterResult.data.title}</h1>

      <Markdown>{matterResult.content}</Markdown>
    </p>
  );
};

export default PostPage;
