import { DB_PATH } from "../config.ts";
import { Todo } from "../models/todo.ts";

export const fetchData = async (): Promise<Todo[]> => {
  // * readFile 函数返回一个 Uint8Array 对象，该对象在解析为 JSON 对象之前需要转换为字符串。
  const data = await Deno.readFile(DB_PATH);
  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);
  // * Uint8Array 和 TextDecoder 都来自核心 JavaScript API。同样，在存储数据时，需要先把字符串转换为 Uint8Array。
  return JSON.parse(decodedData);
};

export const persistData = async (data: Todo[]): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)));
};
