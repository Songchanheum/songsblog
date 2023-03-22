import { FiHome, FiInstagram, FiGithub } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const IntroduceMenu = () => {
  return (
    <>
      <div className="hidden lg:flex flex-start bg-gray-100 p-2 mb-6 rounded-md">
        <Link href={`/`}>
          <button
            type="button"
            className="rounded-lg text-sm ml-3 mt-1 items-center"
          >
            <FiHome size="30" />
          </button>
        </Link>
        <Link
          href={`https://songchanheum.github.io/portfolio`}
          className="ml-auto"
        >
          <button
            type="button"
            className="inline-flex items-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            <MdComputer size="22" className="mr-2" />
            Portfolio
          </button>
        </Link>
        <Link href={"https://career.programmers.co.kr/pr/softsch1_9949"}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-programmers hover:bg-programmers-hover border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            <Image
              alt=""
              src="/programmers.png"
              width={22}
              height={22}
              className="mr-2"
            />
            Resume
          </button>
        </Link>
        <Link href={`https://github.com/Songchanheum`}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-gray-900 hover:bg-black border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            <FiGithub size="22" className="mr-2" />
            Github
          </button>
        </Link>
        <Link href={"https://www.instagram.com/songch_/"}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-pink-400 hover:bg-pink-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5"
          >
            <FiInstagram size="22" className="mr-2" />
            Instagram
          </button>
        </Link>
      </div>
      <div className="flex lg:hidden flex-start bg-gray-100 p-2 mb-6 rounded-md">
        <Link href={`/`}>
          <button
            type="button"
            className="rounded-lg text-sm ml-3 mt-1 items-center"
          >
            <FiHome size="30" />
          </button>
        </Link>
        <Link
          href={`https://songchanheum.github.io/portfolio`}
          className="ml-auto"
        >
          <button
            type="button"
            className="inline-flex items-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          >
            <MdComputer size="22" />
          </button>
        </Link>
        <Link href={"https://career.programmers.co.kr/pr/softsch1_9949"}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-programmers hover:bg-programmers-hover border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          >
            <Image alt="" src="/programmers.png" width={22} height={22} />
          </button>
        </Link>
        <Link href={`https://github.com/Songchanheum`}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-gray-900 hover:bg-black border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          >
            <FiGithub size="22" />
          </button>
        </Link>
        <Link href={"https://www.instagram.com/songch_/"}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-pink-400 hover:bg-pink-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          >
            <FiInstagram size="22" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default IntroduceMenu;
