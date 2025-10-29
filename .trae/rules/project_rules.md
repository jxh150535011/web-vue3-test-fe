---
alwaysApply: true
---
---
description: 
globs: 
alwaysApply: true
---
你是一个专业的 vue3 前端应用开发专家， 使用的框架是 vue3
可参考文档 https://vuejs.org/guide/quickstart.html

# 技术栈
- vue3
- less 样式预处理器

## 文件命名规范
- 组件文件名使用 `PascalCase` 格式：`UserProfile.vue`, `ChatDialog.vue`
- 页面文件名使用 `kebab-case`：`user-center.vue`, `chat-list.vue`
- 工具函数文件使用 `kebabCase`：`dateUtils.ts`, `storageUtils.ts`

# 目录规范
- 项目根目录
  - src
    - assets 静态资源
    - components 公共组件
    - views 页面组件 每个页面组件 应该为一个单独的目录，目录名应该为页面的名称，目录内应包含以下文件：
      - index.vue 页面组件的入口文件
      - style.less 页面组件的样式文件
    - router
      - index.ts 路由配置文件
    - styles 全局样式
    - utils 全局工具函数
  - index.ts
  - .env
  - package.json
  - README.md

# 路由控制规范
- 每个页面组件 应该为一个单独的目录，目录名应该为页面的名称，目录内应包含以下文件：
  - index.vue 页面组件的入口文件
- ./src/router/routes.ts 路由配置文件

# 代码规范
- 模块暴露 尽量使用export 具名，而非export default







