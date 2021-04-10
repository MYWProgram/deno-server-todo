# deno-server-todo

使用 deno + oak(基于 node.js koa) 搭建的后台 Todo 管理工具，使用文件数据库存储；具有增删改查等基本功能

## 版本

> deno < 1.2.0

## 使用

```bash
deno run -A index.ts
```

## 本地调试

使用 VS code 插件 `client server`，打开目录中 `todo.http` 文件点击 send request

### 结构

```bash
└── todos
    ├── db
    ├── handlers
    ├── middlewares
    ├── models
    ├── services
    ├── config.ts
    ├── index.ts
    └── routing.ts
```

- db 目录：作为本地数据库，存放 Todo 数据；
- handlers 目录：存放路由处理器；
- middlewares 目录：存放中间件，用于处理每个请求；
- models 目录：存放模型定义，在我们的示例中只包含 Todo 接口；
- services 目录：存放服务层程序；
- config.ts：包含应用的全局配置信息；
- index.ts：应用的入口文件；
- routing.ts：包含 API 路由信息。
