import {useState} from "react"
import NAvbar from "./Components/NAvbar"
import Navbar from "./Components/NAvbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <div>
      <NAvbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div> 
  )
}

export default App
