import React from "react"
import "@/styles/views/pages/project/HProject.scss"
import Wrapper from "@/hc/ContentWrapper"
import { connect } from "react-redux"
import actionHProject from "@/store/actions/project/HProject"

type Props = {
  list: any
  getProjectList: () => {}
  history: any
}
class HProject extends React.Component<Props> {
  UNSAFE_componentWillMount() {
    const { getProjectList } = this.props
    getProjectList()
  }

  next(id: number) {
    this.props.history.push(`/app/project/detail/${id}`)
  }

  render() {
    const { list } = this.props

    return (
      <div className="project-wrapper">
        {list.map((item: any, i: number) => (
          <div className="project" key={i} onClick={this.next.bind(this, item.id)}>
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
