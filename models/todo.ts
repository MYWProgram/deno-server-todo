// ? 定义 Todo 模板。
export interface Todo {
  // * Todo 编号。
  id: string;
  // * 用户编号。
  userId: number;
  title: string;
  // * 完成状态。
  completed: boolean;
}
