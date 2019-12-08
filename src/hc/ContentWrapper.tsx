import React from "react"
import "@/styles/hc/ContentWrapper.scss"

export default (title: string) => (Slot: any) =>
  class HOC extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="box-wrapper">
            <div className="box-title">{title}</div>
            <Slot {...this.props} className="content" />
          </div>
        </React.Fragment>
      )
    }
  }
