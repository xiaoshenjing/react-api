import React from "react"
import "@/styles/views/main/HContent.scss"
import { ContentRoutes } from "@/routes"

class HContent extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <ContentRoutes />
      </div>
    )
  }
}

export default HContent
