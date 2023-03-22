import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {postPreviews}
    </div>
  );
};
export default HomePage;
