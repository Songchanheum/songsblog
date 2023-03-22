---
title: React / Chakra UI Project — react-scroll
subtitle: React + Chakra UI 메뉴 이동을 위한 react scroll 사용
date: "2021-08-31"
baseimage: reactchakra.png
---

이 프로젝트 구성하면서 가장 고민을 많이 했던 부분은 메뉴라고 생각한다.

여러 방법의 메뉴를 개발해왔지만 지금 프로젝트에는 메뉴 별 페이지를 구성하여 페이지 이동하는 방식보단 원테이크페이지형식으로 스크롤을 이용하여 메뉴를 이동할 수 있는 방식이 더 어울릴 것이라고 생각했다.

그래서 찾은 것이 바로 react-scroll이다.

이전에는 html JQuery를 사용했다.

# href

html에서 a태그 href에 id를 넣어 해당 id를 가지고 있는 div를 찾아갈 수 있는 페이지를 개발했다.

```
<a href="#2021"> click</a>
...
<div id="2021">
...
</div>
```

div가 html body의 top에 고정되는 방식이다. 하지만 정확한 위치로 이동하기 어려웠고(header 크기를 고려하지 못했다.) 제대로 동작하지 않는 경우가 가끔 존재했다.

# JQuery

JQuery의 click event이용하여 animate방식으로 scrollTop을 지정해주는 방식이다.

```
<a value="#2021"> click</a>
...
<div id="2021">
...
</div>
...
<sctipt>
   $('a').on('click', function(event) {
      $('html, body').animate(
      {
         scrollTop : $($(this).attr('value')).offset().top - 230
      }, 1000);
   });
</script>
```

href방식과 비슷하지만 header및 필요한 만큼의 길이 만큼 제외할 수 있다. 하지만 JQuery를 사용하지 않을 것 이기 때문에 이것 또한 패스

# react-scroll

위 두가지 방식을 손쉽게 React에서 사용할 수 있다.

```
import { Link } from "react-scroll";
import { Button } from '@chakra-ui/react';
```

Link태그를 이용하여 버튼을 만든다 Link 태그는 react-scroll에서 제공하고 버튼은 chakraUI를 이용한다.

- button.tsx

```ts
<Link to="1" spy={true} smooth={true}>
  <Button
    as="a"
    variant="ghost"
    aria-label="About"
    my={5}
    w="100%"
    onClick={() => (isSmallScreen ? "" : props.changeDisplay(false))}
  >
    소개
  </Button>
</Link>
```

이전에 소개했던 메뉴버튼중 한개만 가져왔다.

Link태그의 to에 이동할 영역의 ID를 적어주고 영역이동을 확인하기 위해 spy에 true값을, 부드롭게 이동하기 위해 smooth에 true값을 준다.

ChakraUI Component에 직접적인 ID를 주입할 수 없어 Component위에 P태그를 넣어 ID를 주입하였다.

![reactscroll](/images/reactscroll/menu-scroll.png)
버튼을 클릭하면 잘 동작한다!

메뉴구성도 손쉽게 완료했다.
