import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return props.temp === "grid" ? (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  ) : (
    <Link href={`/posts/${props.slug}`}>
      <div className="grid gird-cols-2 gap-2 border-t border-slate-300 p-2 bg-white">
        <h2 className="col-span-2 font-bold text-violet-600">{props.title}</h2>
        <p className="text-slate-700 mb-2">{props.subtitle}</p>
        <p className="text-sm text-right text-slate-400">{props.date}</p>
      </div>
    </Link>
  );
};
export default PostPreview;
