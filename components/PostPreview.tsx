import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

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
      <div className="grid xs:grid-cols-3 md:grid-cols-8 lg:grid-cols-10 grid-flow-row gap-2 border-t border-slate-300 p-2 bg-white">
        <div className="hidden md:flex row-span-2 md:col-span-2 ">
          <Image
            alt=""
            src={
              props.baseimage
                ? `/images/baseImage/${props.baseimage}`
                : "/images/baseImage/no-image.png"
            }
            width={120}
            height={68}
          />
        </div>
        <h2 className="md:col-span-6 lg:col-span-8 font-bold text-violet-600">
          {props.title}
        </h2>
        <p className="lg:col-span-6 md:col-span-4 text-slate-700 mb-2">
          {props.subtitle}
        </p>
        <p className="text-sm text-right md:col-span-2 text-slate-400">
          {props.date}
        </p>
      </div>
    </Link>
  );
};
export default PostPreview;
