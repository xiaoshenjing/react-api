import HHelp from "@/views/pages/help/HHelp"

import HProject from "@/views/pages/project/HProject"
import HDetail from "@/views/pages/project/HDetail"

const menu = [
  { icon: "project", title: "项目管理", key: "/app/project", component: HProject },
  { icon: "question-circle", title: "使用说明", key: "/app/help", component: HHelp }
]

const content = menu
  .map((item: any) => ({ key: item.key, component: item.component }))
  .concat([
    { key: "/app/project/detail/:id", component: HDetail }
    // { key: "/app/project/detail", component: HDetail },
  ])

export { menu, content }
