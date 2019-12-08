import enums from "@/store/enums/help/HHelp"
import { helpContentList } from "@/api/help"

export default {
  getContentList: async (dispatch: any) => {
    const res = await helpContentList()
    return dispatch({ type: enums.GET_CONTENT_LIST, list: res.list })
  }
}
