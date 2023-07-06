import IntroduceMenu from "@/components/IntroduceMenu";
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
const splash_html = `
<iframe id="splash_iframe" class="border-none w-full h-52 absolute" src="/js/splash/boids/boids.html" scrolling="no" style="top: 0px;">
</iframe>
`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="bg-gradient-to-t from-gray-600 to-slate-800 pb-12 text-center overflow-hidden w-full h-52">
        <div dangerouslySetInnerHTML={{ __html: splash_html }} ></div>
        <div className="mb-3 mt-16 flex justify-center">
          <h1 className="inline-flex text-5xl font-bold text-white ">
            Song's Blog
          </h1>
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
