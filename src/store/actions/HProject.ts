import enums from "../enums/HProject"
import { projectItemList } from "@/api/project"

export default {
  getProjectList: async (dispatch: any) => {
    const res = await projectItemList()
    return dispatch({ type: enums.GET_PROJECT_LIST, list: res.list })
  }
}
