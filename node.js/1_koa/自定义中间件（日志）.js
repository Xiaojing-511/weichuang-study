const Koa = require("koa");
const app = new Koa();
// 自定义日志中间件
const logger = require("./logger");

app.use(logger);
app.listen(3000);