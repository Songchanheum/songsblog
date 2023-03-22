---
title: React / Chakra UI Project - Dark Mode
subtitle: React + Chakra UI theme custom - 다크모드 적용기
date: "2021-08-23"
baseimage: reactchakra.png
---

Chakra UI 를 사용하면서 가장 편리한 점 중 한 가지는 다크모드이다.

여러가지 방법으로 다크모드를 활용할 수 있다.

## extendTheme

첫번째로는 extendTheme를 사용하여 전체 테마의 color mode를 변경하는 방법이다.

- theme.js

```js
// theme.js
import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });
export default theme;
```

- document

```js
<Html lang="en">
  <Head />
  <body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Main />
    <NextScript />
  </body>
</Html>
```

- index.js

```js
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById("root")
);
```

initialColorMode를 직접 넣어 (light, dark) 맨처음 default color mode를 관리 할 수 있다.

## useColorMode

- example.js

```js
export default function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}
```

초기설정을 해두고 모드를 변경하고 싶을때 useColorMode를 사용한다. useColorMode는 chakra UI에서 개발한 React hook으로 매우 간단한 방법으로 colorMode를 변경 할 수 있다.

위 소스를 실행하면 아래의 버튼이 나온다.
![toggle](/images/react-chakra-mode/toggle.png)

버튼 클릭 시 너무나 간단하게 모드가 변경되는 것을 확인할 수 있다.!
