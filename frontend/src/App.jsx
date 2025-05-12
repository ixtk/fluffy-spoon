import "./App.scss"
import { Route, Routes } from "react-router"
import { App } from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route index element={<App />} />
    </Routes>
  )
}

export default App
