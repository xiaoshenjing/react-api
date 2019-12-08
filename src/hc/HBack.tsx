import React from "react"
import "@/styles/hc/HBack.scss"
import { Button, Icon } from "antd"
// import { withRouter } from "react-router-dom"

export default (Slot: any) => {
  type Props = {
    history: any
  }

  return class HOC extends React.Component<Props> {
    constructor(props: any) {
      super(props)
      this.back = this.back.bind(this)
    }

    back() {
      this.props.history.go(-1)
    }

    render() {
      return (
        <div className="box-wrapper">
          <div className="box-header">
            <Button onClick={this.back}>
              <Icon type="left" />
              返回
            </Button>
          </div>
          <div className="content">
            <Slot {...this.props} />
          </div>
        </div>
      )
    }
  }
}
