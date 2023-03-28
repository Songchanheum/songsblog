import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return props.temp === "grid" ? (
    <Link href={`/posts/${props.slug}`}>
      <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white hover:shadow-xl hover:bg-slate-50 h-36">
        <p className="text-sm text-slate-400">{props.date}</p>
        <h2 className="font-bold text-violet-600 mb-4 truncate">
          {props.title}
        </h2>
        <p className="text-slate-700 truncate">{props.subtitle}</p>
      </div>
    </Link>
  ) : (
    <Link href={`/posts/${props.slug}`}>
      <div className="grid xs:grid-cols-3 md:grid-cols-8 lg:grid-cols-10 grid-flow-row gap-2 border-t border-slate-300 p-2 bg-white hover:shadow-xl hover:bg-slate-50">
        <div className="hidden md:flex row-span-2 md:col-span-2 mx-auto">
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
        <h2 className="md:col-span-6 md:text-xl text-lg mt-5 mb-3 lg:col-span-8 font-bold text-gray-800 truncate">
          {props.title}
        </h2>
        <p className="lg:col-span-6 md:col-span-4 text-slate-600 mb-3 truncate">
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
