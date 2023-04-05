---
title: React / TailwindCSS - Login Page
subtitle: TailwindCSS 이용하여 간단한 Login Page 구축, Common Components 활용
baseimage: vitetailwind.png
date: "2023-04-01"
---

Component 구축을 위해 간단한 Login Page를 제작했다. <br />
Tailwind css를 활용하여 재사용 가능한 Component를 제작하려 하는데, 실헐적 요소로 Login Page를 선택했다.

## Login Page

![login](/images/tailwind-login/login-page.png)
위와 같은 로그인 페이지를 간단하게 만들어 보았다.

해당 페이지를 한개의 컨테이너로 봤을때 컴포넌트를 분리한다

- header
  - header를 자주 사용하는 일은 없을것으로 예상되니 Header와 밑의 paragraph를 같이 컴포넌트로 분리한다.
- input
  - Input을 Common하게 사용하기 위해선 필요한 props 요소들이 있다. 같이 분리해서 사용한다
- Button
  - Button은 Type적인 요소가 많고, 스타일에 대한 Custom이 필요한 요소가 많다. 적용할떄 유의해야한다

```html
<div
  className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
>
  <div className="w-full max-w-md space-y-8">{Login Page}</div>
</div>
```

login page의 전체 screen을 지정한다.

Login Page 영역에 컴포넌트를 추가하여 적용할 예정이다.

### Header

```js
import { Link } from "react-router-dom";

export type HeaderProps = {
  heading: string,
  paragraph: string,
  linkName: string,
  linkUrl: string,
};

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}: HeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-5 text-center text-sm text-gray-600">
        {paragraph}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
```

- heading: string 타입으로 header title을 의미한다
- paragraph: string 타입으로 부수적인 subtitle을 의미한다
- linkName: string 타입으로 회원가입등 subtitle옆 link의 name을 지정한다
- linkUrl: 연결할 Link를 의미한다

ex)

```js
<div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <Header
      heading="TEST LOGIN"
      paragraph="로그인 정보가 없으세요? "
      linkName="회원가입"
      linkUrl="/sign-up"
    />
  </div>
</div>
```

![haeder](/images/tailwind-login/header.png)
Header를 적용한 예시이다.

### Input

Login Form에서 중요한 ID/PW를 입력할 수 있는 input이다.

```js
export type InputProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  labelText: string,
  id: string,
  type: string,
  isRequired: boolean,
  placeholder: string,
  customClass: string | "",
};

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  id,
  type,
  isRequired = false,
  placeholder,
  customClass,
}: InputProps) {
  return (
    <div className="my-5">
      <div className="sr-only">{labelText}</div>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
```

- onChange: text input의 변화를 적용하기 위한 eventHandler 적용
- value: 해당 input값의 value
- id: input 의 ID
- type: input 의 Type (email, password, number, text ....)
- isRequired: 필수값을 지정한다
- customClass: fix된 className 외에 custom하게 class를 지정할 수 있도록 string type의 customClass를 받는다.
- placehoder: input의 placeholder

웹 접근성을 위해 screen reader 적용(sr-only)하였다.

- Login.tsx

```js
import React, { useState } from "react";

import ActionButton from "./ActionButton";
import Input from "./Input";

const fieldsState = { id: "", pw: "" };

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        <Input
          key="id"
          handleChange={handleChange}
          value={loginState.id}
          labelText="ID"
          id="id"
          type="email"
          isRequired
          placeholder="ID를 입력하세요"
          customClass=""
        />
        <Input
          key="pw"
          handleChange={handleChange}
          value={loginState.pw}
          labelText="PW"
          id="pw"
          type="password"
          isRequired
          placeholder="비밀번호를 입력하세요"
          customClass=""
        />
      </div>
    </form>
  );
}
```

### ActionButton

Form 영역의 submit 혹은 단순 button의 event action을 담당하기 위한 button이다.

```js
export type ButtonProps = {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>,
  action: "submit" | "button",
  text: string,
};

const fixedClass =
  "group relative mt-10 flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";

export default function ActionButton({
  handleSubmit,
  action = "submit",
  text,
}: ButtonProps) {
  return (
    <button
      type={action === "submit" ? "submit" : "button"}
      className={fixedClass}
      onSubmit={handleSubmit}
    >
      {text}
    </button>
  );
}
```

Button의 요소에 Input과 마찬가지로 custom하게 지정할 수 있도록 fix된 class를 지정한다.
추후에 Button component의 수정이 필요할 경우 customClass를 변수로 받아 지정할 수 있도록 한다.

- handleSubmit: button Click event handler
- action: submit, button, reset 등 버튼의 action type을 지정한다
- text: 버튼에 들어갈 text를 입력한다

ActionButton 또한 Login Component에 적용한다.

- Login.tsx

```js
import React, { useState } from "react";

import ActionButton from "./ActionButton";
import Input from "./Input";

const fieldsState = { id: "", pw: "" };

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        <Input
          key="id"
          handleChange={handleChange}
          value={loginState.id}
          labelText="ID"
          id="id"
          type="email"
          isRequired
          placeholder="ID를 입력하세요"
          customClass=""
        />
        <Input
          key="pw"
          handleChange={handleChange}
          value={loginState.pw}
          labelText="PW"
          id="pw"
          type="password"
          isRequired
          placeholder="비밀번호를 입력하세요"
          customClass=""
        />
      </div>
      <ActionButton handleSubmit={handleSubmit} text="Login" action="button" />
    </form>
  );
}
```

![login](/images/tailwind-login/login.png)
Login에 input과 button을 적용한 예시이다.

---

### 최종

- Signin/index.tsx

```js
import Header from "../../../components/Header";
import Login from "../../../components/Login";

function SignIn() {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Header
          heading="TEST LOGIN"
          paragraph="로그인 정보가 없으세요? "
          linkName="회원가입"
          linkUrl="/sign-up"
        />
        <Login />
      </div>
    </div>
  );
}

export default SignIn;
```

이것으로 간단한 Login page를 이용해 component를 구성해보았다.
atomic css적인 요소로 component를 만들 계획이기 때문에 추가적으로 지속적인 수정이 이루어져야 할 것이다.
