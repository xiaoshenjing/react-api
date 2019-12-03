import React from "react"
import "antd/dist/antd.css"
import "@/mock"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import store, { persistor } from "@/store"
import { PageRoutes } from "@/routes"

const Page = (props: any) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PageRoutes />
    </PersistGate>
  </Provider>
)

export default Page
