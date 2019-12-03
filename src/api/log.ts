import http from "./base"

export function login({ username, password, remember }: { username: string; password: string; remember: string }) {
  return http.post("login", { username, password, remember }, true)
}

export function logout() {
  return http.post("logout", null, true)
}
