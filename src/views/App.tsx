import React from "react"
import "@/styles/views/App.scss"
import HSideItem from "@/views/main/HSideItem"
import HHeader from "@/views/main/HHeader"
import HContent from "@/views/main/HContent"
import { ContentRoutes } from "@/routes"

type Props = {
  history: any
}
class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <HSideItem history={this.props.history} />
        <div className="wrapper">
          <HHeader />
          <HContent>
            <ContentRoutes />
          </HContent>
        </div>
      </div>
    )
  }
}

export default App
