---
title: TailwindCSS / Vue Project - Common Config
subtitle: TailwindCSS + VueJS Common Config Setting
date: "2021-08-15"
baseimage: tailwindcssvue.png
---

VueJS를 직접 경험해보진 못했지만 Vue이용하여 Oauth2 이용한 공통 로그인 페이지를 제작한 경험이 있다.

그때 Vue를 사용하며 다양한 프레임워크에 관심을 가지기 시작하였고 경험해본 것이라곤 AngularJS(Angular와는 약간 다르다) 뿐이었던 경력에 이것저것 추가하고자 공부를 했었더랬다… (3년전 얘기다)

그 회사에서 나와 이직하면서 이곳은 React, JSP 기반으로만 프로젝트를 개발하기 때문에 Vue를 경험할 기회가 없었다.

때문에 Vue와 평소에 관심있던 TailwindCSS를 조합하여 프로젝트를 진행하려한다.

해당내용에 관해서는 차근차근 업로드할 계획이다.

우선 TailwindCSS-Vue 프로젝트를 생성한 후 tailwind.config.js.파일과 postcss.config.js 파일을 생성한다. (위 내용은 이미 만들어두었던 내용이라 과정이 없다…)

- tailwind.config.js

```js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      violet: colors.violet,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
```

기본적으로 tailwind는 다양하게 사용할 수 있는 색감이 중요하다 생각한다. 기본적으로 사용하는 color에 대한 내용을 추가했다.

폰트는 추후 추가 예정

index.css 파일을 생성하여 아래 내용을 주입한다.

- index.css

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 500;
    src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
  }
}
```

마찬가지로 폰트내용은 추후 추가 예정이다.

생성한 index.css 내용을 main.js에 추가한다.

- main.js

```js
import Vue from "vue";
import App from "./App.vue";
import Directives from "./plugins/directives";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./store/index";
import i18n from "./i18n";
import "./registerServiceWorker";
import "./plugins/socketPlugin";
import "./index.css";

Vue.use(Directives);
Vue.use(vuetify);

new Vue({
  el: "#app",
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
```

위 코드를 보면 vuetify도 같이 import하였는데 테스트용 프로젝트이기 때문에 tailwindcss와 vuetify 병행하며 사용하여 더 나은 디자인을 찾으려 함이다.

기본적인 프로젝트를 구축완료하였다.
