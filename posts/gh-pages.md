---
title: gh-pages로 내 React 웹사이트 배포하기
subtitle: 정적 웹사이트 배포하는 방법 (gh-pages)
date: "2022-09-01"
---

##Github Pages

정적 웹사이트를 배포하기 위해 배포 방법을 알아보려고 한다.
Github Pages는 무엇인가?

> Github Pages
>
> - Github repository의 코드를 host해주는 기능

Github repository에 코드 올리고 몇가지 설정해주면 무료로 웹사이트를 배포할 수 있다.

##배포 방법

배포 웹사이트의 Github repository 접속 후 Setting에 들어간다.
왼쪽 카테고리 메뉴 Code and automation 에서 Pages로 들어간다 (2023.03.18 수정)
![setting](/images/gh-pages/setting.png)

Build and deployment의 Source에 Deploy from branch를 선택하고
Branch에 호스팅을 원하는 Branch를 선택한다.

호스팅을 위한 웹사이트에 gh-pages를 설치한다.

```
npm i gh-pages --save-dev
```

package.json을 수정한다.

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    ...
    "gh-pages": "^4.0.0",
    ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "yarn build",
    "deploy": "gh-pages -b master -d build",
    "clean": "gh-pages-clean",
  },
  "homepage": "https://songchanheum.github.io/portfolio",
  ...
}
```

- gh-pages : 설치 확인
- predeploy : deploy 이전 소스 build 작업
- deploy : gh-pages lib 이용하여 호스팅 빌드 및 deploy
- homepage: 호스팅될 웹 사이트 주소

deploy 명렁어 실행하여 호스팅 진행

```
npm run deploy
yarn deploy
```

배포가 완료되면 gh-pages의 브랜치가 생성되고 접속한다
![homepage](/images/gh-pages/homepage.png)

무료 호스팅 완성!
