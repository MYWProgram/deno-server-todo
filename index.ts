import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routing.ts";
import notFound from "./handlers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";
// ? 新建应用程序。
const app = new Application();
// ? 跨域 headers 设置。
app.use(async (ctx: any, next: any) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Headers", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "*");
  await next();
});
// ? 添加各种中间件。
app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${APP_HOST}:${APP_PORT}...`);
// ? 启动服务器。
await app.listen(`${APP_HOST}:${APP_PORT}`);
