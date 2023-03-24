---
title: React / Chakra UI Project — Background Image
subtitle: Background Image 적용 및 고정
date: "2021-09-15"
baseimage: reactchakra.png
---

너무나 간단한 웹페이지 배경화면을 고정하는 방법을 설명하려 한다.

너무나 간단한데 왜 작성하느냐… 나는 간단하지 못하게 했기 때문이다!!! 진짜 처참하고 회의감을 느끼도록 너무 어렵게 적용하였다. 문서만 제대로 읽었어도 이런일은 없었겠지…

# Box Background Option

Box를 사용하여 배경화면을 넣을 수 있다. Box 기본 옵션에 bgoption을 여러가지 볼 수 있다.

![back](/images/chakra-back/props1.png)

기존 Box Option에는 안나와 있고 Style Props관련해서 확인해봐야 나온다…

CSS html 마크업 언어를 잘 다루는 개발자라면 충분히 무슨 의미인지 알 수 있으니 설명은 넘어가도록 하겠다.

```js
import React, { useState, useEffect, useRef } from "react";
import {
  Circle,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Button,
  Divider,
  Box,
  SlideFade,
  ScaleFade,
  Icon,
} from "@chakra-ui/react";
import BackgroundImg from "../../image/background.jpg";

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isSmallScreen] = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Flex
        position="absolute"
        w="1000px"
        h="300px"
        direction={isSmallScreen ? "row" : "column"}
        spacing="200px"
        p={isSmallScreen ? "32" : "0"}
        alignSelf="center"
        zIndex={999}
      ></Flex>

      <Box
        w="1920"
        h="1080"
        bgImage={BackgroundImg}
        bgPosition="center"
        bgSize="cover"
        bgAttachment="fixed"
        zIndex={"auto"}
        opacity={0.2}
      />
    </>
  );
}
export default Home;
```

Flex와 겹쳐서 배경화면을 보이게 하기 위해 옵션을 추가했다.

bgImage — 배경화면 이미지 이다.

bgPosition — 중앙 기준

bgSize — 이미지 사이즈를 최대크기에 맞춰서 넣었다.

bgAttachment — 뷰포트에 고정하여 스크롤에 반응하지 않도록 하였다.

zIndex — flex와 겹쳐야 하고 맨뒤에서 배경화면 역할을 해줘야 하기 때문에 작성하였다.

opacity — 투명도 설정

배경화면 잘 나온다 ㅠㅠ 몇시간을 고생한건지…. 기초부터 잘 다져야겠다.
