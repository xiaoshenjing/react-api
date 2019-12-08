import enums from "@/store/enums/project/HDetail"
import { getItemDetail } from "@/api/project"

export default {
  getItemDetail: async (dispatch: any, id: number) => {
    const res = await getItemDetail({ id })
    return dispatch({ type: enums.GET_ITEM, data: res })
  }
}
