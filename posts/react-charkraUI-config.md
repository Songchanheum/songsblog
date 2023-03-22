---
title: React / Chakra UI Project — Configure
subtitle: react + chackraUI
baseimage: reactchakra.png
date: "2021-08-20"
---

우선 프로젝트를 구성해야한다.

React기반에 TypeScript를 사용하며 UI Component는 Chakra UI를 사용할 것이다.

우선 프로젝트를 만든다.

```
$ npx create-react-app typescript-react-app --scripts-version=react-scripts-ts
```

TypeScript가 적용된 프로젝트를 생성한다. ts와 tsx 확장자를 보자니 너무나 어색하다. 그래도 할건해야지…

필요한 라이브러리를 다운받는다

우선 ChakraUI를 설치한다. 설치방법은 ChakraUI 공식문서에 작성되어 있다.

```
$ yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

redux와 saga도 적극 활용할 것이고, 디자이너 협업을 하지 않기때문에 편의성을 위해 styled components도 같이 받아준다.

```
$ yarn add react-redux
$ yarn add redux-saga
$ yarn add styled-components
```

redux-saga는 액션을 모니터링하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용하는 미들웨어이다. 이것 또한 학습중인 부분이라 부분 적용할 예정이다.

다른 기타 설정들이 있지만 프로젝트 진행하는데 크게 사용하지 않을 예정이기에 넘어가기로 하고…

Chakra UI를 테스트 해본다.

```js
import React from "react";
import styled from "styled-components";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Container = styled.div`
  background-color: pink;
  width: 100%;
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        <Box bg="tomato" height="220px"></Box>
        <Box bg="tomato" height="100px"></Box>
        <Box bg="tomato" height="100px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Container>
  );
}

export default Home;
```

App.tsx에 Home Component를 호출하고 Home Component를 생성하여 위와같이 작성해준다.

Styled Component를 이용하여 Container를 생성 한 후 Chakra UI의 SimpleGird와 Box를 이용하였다.

![demo1](images/react-charkraUI-config/demo1.png "이런 아무것도 아닌 박스가 나온다! 차크라좋아!")

minChildWidth를 적용하였기 때문에 나름 반응형으로 Grid를 그려주는 모습을 볼 수 있다.

![demo2](images/react-charkraUI-config/demo2.png "이게뭐지…")

활용할 수 있는 범위가 생각보다도 더 다양하여 앞으로 개발이 기대된다.
