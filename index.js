import express from "express";
const app = express();

// import { User } from './models/index'

import userRouter from './router/user'


// 使用 pug 模板引擎
app.set("view engine", "pug");
// 静态文件，没填路径，默认为根目录
app.use("/static", express.static("public"));
// localhost:4000/static/outside.png


app.use("/", userRouter);


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server listing http://localhost:${PORT}`);
});
