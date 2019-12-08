import React from "react"
import "@/styles/views/pages/HProject.scss"
import Wrapper from "@/hc/ContentWrapper"
import { connect } from "react-redux"
import actionHProject from "@/store/actions/HProject"

type Props = {
  list: any
  getProjectList: () => {}
}
class HProject extends React.Component<Props> {
  render() {
    const { list, getProjectList } = this.props
    getProjectList()

    return (
      <div className="project-wrapper">
        {list.map((item: any, i: number) => (
          <div className="project" key={i}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  list: state.HProject.list
})

const mapDispatchToProps = (dispatch: any) => ({
  getProjectList() {
    actionHProject.getProjectList(dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper("项目管理")(HProject))
