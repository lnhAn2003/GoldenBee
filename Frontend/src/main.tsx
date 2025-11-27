import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { AppRouter } from "./router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
      <AppRouter />
    </MantineProvider>
  </React.StrictMode>
)
