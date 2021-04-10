import { Response } from "https://deno.land/x/oak/mod.ts";
import { getTodos } from "../services/todos.ts";

export default async ({ response }: { response: Response }) => {
  // * response 对象类似于 node.js express 中的 res 对象，在 express 中通常会调用 res 对象的 json 或 send 方法来返回响应；而在 koa/oak 中，需要将响应值赋给 response.body 属性。
  response.body = await getTodos();
};
