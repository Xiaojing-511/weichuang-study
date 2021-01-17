const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

// 同步处理
// app.use( (ctx) => {
//   ctx.body = "Hello World";
// });

router.get("/", (ctx, next) => {
    ctx.body = "首页...";
});

router.get("/login", (ctx, next) => {
    ctx.body = "登陆...";
});

app.use(router.routes());


app.listen(3000);
