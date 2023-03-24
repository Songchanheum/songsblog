---
title: 기록용 - apache Echart 공통 모듈
subtitle: Echart 공통 모듈 적용하는 방법
date: "2021-10-23"
---

## Apache Echart

React에 Apache Echart 공통 모듈 적용하는 방식

```js
import React from "react";

import ReactECharts from "echarts-for-react";

const CommonChart = (props) => {
  return (
    <React.Fragment>
      <ReactECharts
        option={props.chartList.option}
        notMerge={true}
        lazyUpdate={true}
        style={{ height: "100%", width: "100%" }}
      />
    </React.Fragment>
  );
};

export default CommonChart;
```

chartList에 option Object를 넣어 전달하는 방식
