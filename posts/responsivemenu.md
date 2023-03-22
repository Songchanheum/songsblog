---
title: React / Chakra UI Project — Responsive Menu
subtitle: React + Chakra UI 반응형 및 메뉴 구성
date: "2021-08-25"
baseimage: reactchakra.png
---

리액트에서 반응형으로 작업하기위한 방법은 무궁무진하다. 아무것도 모르는 나도 알고있는 방법이 2–3가지는 넘으니 무궁무진하다 할 수 있다.

보통 CSS media query 사용하거나 리액트에서 스크립트 단으로 사용할 수 있는 React-Responsive Library를 사용한다.

정말 친절하게도 Chakra UI에서는 다크모드와 마찬가지로 미디어쿼리를 적용할 수 있는 Hook을 제공한다. 참 친절하다.

## 1\. useMediaQuery

우선 미디어 쿼리를 지정해야한다.

```
import {useMediaQuery} from '@chakra-ui/media-query';
...const \[isSmallScreen\] = useMediaQuery('(min-width:750px)');
```

위와같이 width의 값이 750이하 인지의 여부를 판단하는 변수를 생성 할 수 있다. 타입은 당연히 boolean값이다.

모바일/윈도우화면 에 대한 반응형으로 작업하기 위해 1가지만 추가했지만 다른 미디어쿼리들과 마찬가지로 여러개의 미디어쿼리를 생성할 수 있다.

## 2\. 적용

헤더에 메뉴를 추가하려고 한다. Windows 기본창에선 헤더에 위치하여 클릭시 메뉴로 넘어갈 수 있게 구현한다.

- sideMenu.tsx

```ts
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

function SideMenu(props: any) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Link to="1" spy={true} smooth={true}>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          소개
        </Button>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          경력
        </Button>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          Dev Note
        </Button>
      </Link>
      <Link to="4" spy={true} smooth={true}>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          ABOUT
        </Button>
      </Link>
    </>
  );
}

export default SideMenu;
```

- main

```ts
<Flex flexDir="column" align="center">
  <SideMenu />
</Flex>
```

![menu](/images/responsivemenu/menu.png)
위 사진과 같이 메뉴가 뜨는것을 확인 할 수 있다.

여기서 미디어쿼리를 적용하여 수정한다.

- main.tsx

```js
{/* 모바일용 메뉴 */}
<Flex w="100vw" bgColor={isDark ?"gray.500" : "gray.50"} zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflow="auto" flexDir="column" display={display? 'flex':'none'}>
    <Flex justify="flex-end">
        <IconButton mt={2} mr={2} aria-label="close" size="lg" icon={isDark? <FaRegWindowClose /> : <FaWindowClose />} onClick={() => changeDisplay(false)}></IconButton>
    </Flex>
    <Flex flexDir="column" align="center">
        <SideMenu {
            ...{
                ...props,
                changeDisplay : changeDisplay
            }
        }/>
    </Flex>
</Flex>

{/* 모바일용 메뉴 토글 버튼 (햄버거메뉴버튼) */}
<IconButton ml={5} display={isSmallScreen ? "none" : "flex"} aria-label="menu" size="lg" mr={2} icon={<GiHamburgerMenu />} onClick={() => changeDisplay(true)}></IconButton>
<Spacer />
<Flex display={isSmallScreen ? "flex" : "none"}>
{/* 윈도우용 메뉴 헤더에 직접 노출 */}
    <SideMenu />
</Flex>
```

햄버거메뉴 아이콘버튼과 직접노출시키는 SideMenu가 inSmallScreen 변수에 따라 노출/비노출 하도록 수정하였다.

![menu-1](/images/responsivemenu/menu-1.png)

![menu-2](/images/responsivemenu/menu-2.png)

모바일 화면에선 메뉴대신 햄버거 메뉴 아이콘이 노출된다.햄버거 메뉴 클릭 시 메뉴 리스트를 노출한다.

기능은 윈도우/모바일 동일하나 모바일의 경우 메뉴를 선택할 때 메뉴리스트 팝업을 숨겨야 하기 때문에 클릭 이벤트를 추가해준다.

메뉴 구성이 완성된 것을 볼 수 있다! 신난다!
