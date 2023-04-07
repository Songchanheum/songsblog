import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiHome, FiInstagram } from "react-icons/fi";
import { MdComputer } from "react-icons/md";

const IntroduceMenu = () => {
  return (
    <>
      <div className="flex-start mb-3 hidden rounded-md bg-gray-100 p-2 md:flex">
        <Link href={`/`}>
          <button
            type="button"
            className="ml-3 mt-1 items-center rounded-lg text-sm"
          >
            <FiHome size="25" />
          </button>
        </Link>
        <Link
          href={`https://songchanheum.github.io/portfolio`}
          className="ml-auto"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <MdComputer size="22" className="mr-2" />
            Portfolio
          </button>
        </Link>
        <Link href={"https://career.programmers.co.kr/pr/softsch1_9949"}>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-programmers px-5 py-1.5 text-sm font-medium text-white hover:bg-programmers-hover focus:outline-none focus:ring-4 focus:ring-gray-100"
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
            className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-900 px-5 py-1.5 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <FiGithub size="22" className="mr-2" />
            Github
          </button>
        </Link>
        <Link href={"https://www.instagram.com/songch_/"}>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-pink-400 px-5 py-1.5 text-sm font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <FiInstagram size="22" className="mr-2" />
            Instagram
          </button>
        </Link>
      </div>
      <div className="flex-start mb-6 flex rounded-md bg-gray-100 p-2 md:hidden">
        <Link href={`/`}>
          <button
            type="button"
            className="ml-3 mt-1 items-center rounded-lg text-sm"
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
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <MdComputer size="22" />
          </button>
        </Link>
        <Link href={"https://career.programmers.co.kr/pr/softsch1_9949"}>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-programmers px-3 py-1.5 text-sm font-medium text-white hover:bg-programmers-hover focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <Image alt="" src="/programmers.png" width={22} height={22} />
          </button>
        </Link>
        <Link href={`https://github.com/Songchanheum`}>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <FiGithub size="22" />
          </button>
        </Link>
        <Link href={"https://www.instagram.com/songch_/"}>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-pink-400 px-3 py-1.5 text-sm font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <FiInstagram size="22" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default IntroduceMenu;
