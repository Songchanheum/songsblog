---
title: MERN stack - React-router 적용
subtitle: Mongodb express React Nodejs Stack React Router 개발
date: "2022-09-12"
baseimage: mernstack.png
---

이전에 만들었던 블로그 페이지를 다시 불러왔다.

github에 blog형태로 적용하기 위해 build배포가 필요한 사항이지만, 개발 당시 router 적용을 하지 않았기 때문에 바로 build하여 배포 시 routing 404 error가 발생한다. 때문에 진행중인 프로젝트에 router 적용을 진행하려 한다.

repository basename 사용을 위해 아래와 같이 homepage를 작성하였다.

- package.json

```
"homepage": "https://songchanheum.github.io/blog_temp"
```

BrowserRouter에 basename을 설정 한 후 Route path를 설정하였다.

- App.js

```
<BrowserRouter basename="/blog_temp">
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Home} />
    <Route exact path="/posts" component={PostsList} />
    <Route exact path="/posts/:category" component={PostsList} />
    <Route exact path="/posts/:category/:id" component={PostDetails} />
    <Redirect to="/" />
  </Switch>
</BrowserRouter>
```

Chakra UI Componet를 사용하면서 적용한 Link, Chakra.a 의 Path도 /blog_temp path를 추가해주고 설정 완료!

gh-pages를 이용하여 github 페이지 올려 테스트 완료!

https://songchanheum.github.io/blog_temp
