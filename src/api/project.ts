import http from "./base"

export function projectItemList() {
  return http.get("projectItemList")
}

export function getItemDetail({ id }: { id: number }) {
  return http.get("projectItem", { id })
}
