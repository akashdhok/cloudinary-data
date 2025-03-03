import React, { useState } from 'react'
import axios from "axios"
const App = () => {
  const[image  ,setImage] = useState("")
const[input , setInput] = useState({})
const changeImage  = (e)=>{
  let files = e.target.files[0]
      setImage(files)
}
const changeHandler = (e)=>{
  const{name , value} = e.target;
  setInput({
    ...input,
    [name] : value
  })
}
const submitHandler = async()=>{
  let formData = new FormData()
  formData.append("file" , image)
  formData.append("upload_preset" , "myPhoto")
formData.append("cloud_name" , "dpyic0kt0")

let api = "https://api.cloudinary.com/v1_1/dpyic0kt0/image/upload"
let res = await axios.post(api , formData)
console.log(res.data)
alert("image uploaded")
}
  return (
    <>
   Name <input type="text" name='name' onChange={changeHandler} /> <br />
    Email <input type="text" name='email' onChange={changeHandler} /> <br />
    City <input type="text" name='city'  onChange={changeHandler}/> <br />
    ImageUrl <input type="file" name='image'  onChange={changeImage}/> <br />
    <button onClick={submitHandler}>Submit</button>
    </>
  )
}

export default App