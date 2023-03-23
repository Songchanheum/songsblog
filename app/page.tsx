import Link from "next/link";

const HomePage = () => {
  return (
    <div className="mx-auto my-10 text-center">
      <Link href={`/blog`}>
        <h1 className="font-bold hover:underline">Go to BLOG</h1>
      </Link>
    </div>
  );
};

export default HomePage;
