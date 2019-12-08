import enums from "@/store/enums/common"

export default {
  login: () => ({ type: enums.LOGIN }),
  logout: () => ({ type: enums.LOGOUT }),
  setUser: (value: any) => ({ type: enums.SET_USER, value })
}
