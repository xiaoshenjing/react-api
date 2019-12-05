import HHelp from "@/views/pages/HHelp"
import HProject from "@/views/pages/HProject"

export let menu = [
  { icon: "project", title: "项目管理", key: "/app/project", component: HProject },
  { icon: "question-circle", title: "使用说明", key: "/app/help", component: HHelp }
]
