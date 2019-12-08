import http from "./base"

export function helpContentList() {
  return http.get("helpContentList")
}
