

### 使用es6

1. express项目中安装babel-cli
```
$ npm install --save-dev babel-cli
```

2. 安装presets
```
npm install --save-dev babel-preset-es2015 babel-preset-stage-2
```

3. 在package.json里添加运行的脚本

```json
{
    ...
    "scripts": {
        "start": "babel-node index.js --presets es2015,stage-2"
    }
    ...
}
```

5. 运行

```
npm start
```

### 热更新

1. 安装nodemon
```
npm install --save-dev nodemon
```

2. 修改脚本
```
{
    ...
    "scripts": {
        "start": "nodemon index.js --exec babel-node --presets es2015,stage-2" 
    }
    ...
}
```

3. 运行

```bash
# 只启动热更新
nodemon app

# 启动es6 和 热更新
npm start
```

现在更改js代码，不需要重启服务，就可以实现效果了

### 把Babel选项保存到.Babelrc中
```
touch .babelrc
```
添加如下的配置。
```
{
  "presets": ["es2015", "stage-2"], 
  "plugins": []
}
```
现在就可以在npm脚本里去掉那些多余的选项了。
```
"scripts": {
    "start": "nodemon index.js --exec babel-node",
    "build": "babel lib -d dist", 
    "serve": "node dist/index.js"
}
```

### 安装模板引擎
```
npm install pug --save
```

index.js文件
```js
app.set("view engine", "pug");

var comments = [
  {
    name: "张三1",
    message: "今天天气不错！",
    dateTime: "2015-10-16"
  },
  {
    name: "张三2",
    message: "今天天气不错！",
    dateTime: "2015-10-16"
  },
]
// 路由
app.get("/get", function(req, res) {
  res.render("first", {
    comments: comments
  });
});
```

`first.pug`文件
```
doctype html
html
    head
        title = "Hello Pug"
    body
        p.greetings#people Hello World!
        ul
            each item in comments
                li
                    p= item.name
                    p= item.message
                    p= item.dateTime
```



### 静态文件
静态文件，没填路径，默认为根目录
```
app.use("/static", express.static("public"));
```

### 使用中间件


### 打包
```js
"build": "babel lib -d dist",
"serve": "node dist/index.js"
```