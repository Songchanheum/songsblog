import fs from "fs";
import { PostMetadata } from "./PostMetadata";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      baseimage: matterResult.data.baseimage,
      slug: fileName.replace(".md", ""),
      temp: "",
    };
  });

  return posts.sort((a, b) =>
    a.date.toLowerCase() < b.date.toLowerCase() ? 1 : -1
  );
};

export default getPostMetadata;
