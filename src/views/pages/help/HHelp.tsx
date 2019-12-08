import React from "react"
import Wrapper from "@/hc/ContentWrapper"
import { connect } from "react-redux"
import actionHHelp from "@/store/actions/help/HHelp"

type Props = {
  getContentList: () => {}
  list: any
}
class HHelp extends React.Component<Props> {
  UNSAFE_componentWillMount() {
    const { getContentList } = this.props
    getContentList()
  }

  render() {
    const { list } = this.props

    return (
      <div>
        {list.map((item: string, i: number) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  list: state.HHelp.list
})

const mapDispatchToProps = (dispatch: any) => ({
  getContentList() {
    actionHHelp.getContentList(dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper("帮助文档")(HHelp))
