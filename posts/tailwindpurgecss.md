---
title: TailwindCSS / Vue Project — PurgeCSS
subtitle: TailwindCSS + VueJS Tailwind 클래스 파일 정리를 위한 PurgeCSS 사용기
date: "2021-08-18"
baseimage: tailwindcssvue.png
---

Tailwind CSS 를 처음 사용하다 보니 사용하고 싶은 요소들을 상당수 추가했다. 그러다 보니 용량이 말이 안된다. 쓰는 것만 냅두고 다 날려버리고 싶은 욕구에 검색을 해보니 PurgeCSS 라는 PostCSS 아들 격인 아이가 있더라.

# PurgeCSS

위에 설명한것과 같이 쓰는클래스 제외하고 전부 삭제해주는 아주 유용한아이다.

우선 PurgeCSS를 설치해준다.

```
$ yarn add --dev [@fullhuman/postcss-purgecss](http://twitter.com/fullhuman/postcss-purgecss)
```

postcss.config.js 의 내용을 수정한다.

```js
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssPurgecss = require(`@fullhuman/postcss-purgecss`);

const purgecss = postcssPurgecss({
  content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).-move$/,
    /^router-link(|-exact)-active$/,
  ],
});

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    process.env.NODE_ENV !== "development" ? purgecss : "",
  ],
};
```

어떠한 내용이 들어있는지는 자세히 모르겠다. whitelistPatterns에 존재하는 패턴을 제외하고 정규식에 맞지 않으면 전부 삭제하는 코드라고 한다.

content는 glob패턴을 이용하여 purgeCSS가 다녀갈 곳을 설정해준다.

마지막에 추가한 내용은 개발 환경에서는 동작하지 않게 만드는 것인데 개발을 진행하면서 어떤 클래스를 사용할지 매번 바뀌기 때문에 꺼두는 것이라고 한다.

가뭄에 단비같은 너무나 유용한 정보다.

출처 : [https://www.imkh.dev/vue-tailwindcss/](https://www.imkh.dev/vue-tailwindcss/)
