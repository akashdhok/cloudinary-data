import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Insert from "./Insert"
import Display from "./display"

const App = () => {
  return (
    <>
 <Routes>
  <Route path="/" element = {<Layout/>}>
<Route index element = {<Insert/>}/>
<Route path="insert" element = {<Insert/>}/>
<Route path="display" element = {<Display/>}/>


  </Route>
 </Routes>
    </>
  )
}

export default App