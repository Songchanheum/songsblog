import IntroduceMenu from "@/components/IntroduceMenu";
import { TbHandClick } from "react-icons/tb";
import "../styles/globals.css";

export const metadata = {
  title: "Song`s Blog",
  description: "Next Blog Page made by Chanheum Song",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Song`s Blog",
    description: "Next Blog Page made by Chanheum Song",
    url: "https://songsblog.vercel.app/",
    siteName: "vercle.app",
    type: "website",
  },
  twitter: {
    title: "Song`s Blog",
    description: "Next Blog Page made by Chanheum Song",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="bg-gradient-to-t from-gray-600 to-slate-800 p-12 text-center">
        <div className="group relative mb-3 mt-4 flex justify-center">
          <h1 className="inline-flex text-3xl font-bold text-white ">
            Song's Blog
            <TbHandClick size="33" className="pt-2 text-violet-300" />
          </h1>
          <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-left text-xs text-white transition-all group-hover:scale-100">
            ✨ 7년차 WEB 개발자
            <br />✨ 3년차 Front-end 개발자
            <br />✨ (주)알티모빌리티 근무 중
            <br />✨ 이 Blog Web은 NextJS/Typescript 와 TailwindCSS 로 구성되어
            있습니다.
          </span>
        </div>
        <p className="text-xs text-slate-300 sm:text-sm">
          송찬흠의 Dev Blog 입니다! (2021-08 ~ 진행중)
        </p>
      </div>
      <IntroduceMenu />
    </header>
  );
  const footer = (
    <footer>
      <div className="mt-8 border-t border-slate-400 py-6 text-center text-slate-400">
        <h3>Developed by Chanheum Song</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className="scrollbar-hide">
        {header}
        <div className="mx-auto rounded-sm bg-white px-6 opacity-90 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
