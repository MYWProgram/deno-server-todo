import { Response } from "https://deno.land/x/oak/mod.ts";

// ? 定义 404 路由。
export default ({ response }: { response: Response }) => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};
