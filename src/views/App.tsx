import React from "react"
import "@/styles/views/App.scss"
import HSideItem from "@/views/main/HSideItem"
import HHeader from "@/views/main/HHeader"
import HContent from "@/views/main/HContent"
import { ContentRoutes } from "@/routes"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HSideItem />
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
