# 选择文件插件

### 说明

js 实现选择文件的功能

### example

1. 模块导入

```javascript
import pickFile from "pick-file";

pickFile().then((res) => {
  console.log(res);
});
```

2. script 引入

```javascript
<script src="dist/pick-file.js"></script>;

pickFile
  .default({ multiple: true, accept: "image/gif,image/png" })
  .then((res) => {
    console.log(res);
  });
```

### params

|      功能      |   参数   | 默认值 |
| :------------: | :------: | :----: |
| 是否文件可多选 | multiple | false  |
|  可选择的文件  |  accept  |   空   |
