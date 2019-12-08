import React from "react"
import { connect } from "react-redux"
import HBack from "@/hc/HBack"
import actionHDetail from "@/store/actions/project/HDetail"

type Porps = {
  match: any
  getItemDetail: (id: number) => {}
  data: any
}
class HDetail extends React.Component<Porps> {
  UNSAFE_componentWillMount() {
    const { id }: { id: number } = this.props.match.params
    const { getItemDetail } = this.props
    getItemDetail(id)
  }

  render() {
    const { data } = this.props
    return (
      <div className="detail">
        <div className="title">{data.title}</div>
        <div className="date">{data.date}</div>
        <div className="description">{data.description}</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  data: state.HDetail.data
})

const mapDispatchToProps = (dispatch: any) => ({
  getItemDetail(id: number) {
    actionHDetail.getItemDetail(dispatch, id)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HBack(HDetail))
