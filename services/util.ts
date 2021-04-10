import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";
// ? 使用 uuid 来为新建的 Todo 生成唯一的 id。
export const createId = () => uuid.generate();
