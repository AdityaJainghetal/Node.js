import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] =useState({});
    const [selectedFile,setSelectedFile] = useState(null);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    const handleSubmit= async ()=>{
        const formData = new FormData();
        formData.append("file", selectedFile)
        formData.append('upload_preset',"project")
        formData.append('cloud_name',"dgc7ltpg8")
        const response = await axios.post("https://api.cloudinary.com/v1_1/dgc7ltpg8/image/upload", formData)

        console.log(response.data.url)
        const img= response.data.url

        let api = "http://localhost:8000/mycloudenary/datasave";
        axios.post(api, {...input, images:img}).then((res)=>{
            alert("data save")
        })

    }

    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0])
     
        
    }



    return(
        <>
          <h1> Insert book Data</h1>

          Enter Roll no : <input type="number" name="rollno" 
          value={input.rollno}  onChange={handleInput}/>
          <br/>
          Enter your name : <input type="text" name="name" 
          value={input.name}  onChange={handleInput}/>
          <br/>
          Enter your city : <input type="text" name="city"
          value={input.city}  onChange={handleInput}/>
          <br/>
          Images: <input type="file" name="file" onChange={handleFileChange}/>
          <button onClick={handleSubmit}>Save!</button>
        </>
    )
}

export default Insert;