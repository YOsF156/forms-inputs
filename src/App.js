// import React, { useState } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home/Home'
// import Login from './Components/Login/Login'

// function App() {
//   const [IsLogin, setIsLogin] = useState(false)
//   return (



//     <div>
//       <header>
//         my site
//       </header>
//       <Routes>
//         <Route path="/" element={<Navigate to={IsLogin ? "/home" : "/login"} />} />
//         <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
//         <Route path="/home" element={<Home />} />


//       </Routes>
//     </div>
//   )
// }

// export default App



// import React, { useState } from "react";
// import axios from "axios";
// const ImageUploadForm = () => {
//   const [image, setImage] = useState(null);
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       setImage(imageBase64);
//     };
//     console.log({ ...reader });
//     reader.readAsDataURL(file);
//     console.log(reader);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("/api/upload-image", { image });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       {image && <img src={image} style={{ width: "50px" }} alt="" />}
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//         required
//       />

//       <label htmlFor="password">Password</label>
//       <input type="password" id="password" />

//       <label htmlFor="confirm-password">Confirm Password</label>
//       <input type="password" id="confirm-password" />

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default ImageUploadForm;

import React, { useState } from "react";
import "./styles.css";

function FormExample() {
  // Declare state variables to store the values of the form inputs
  const [userData, setUserData] = useState({ userName: "", password: "", range: 40, gender: "male" });
  console.log("🚀 ~ file: App.js:88 ~ FormExample ~ userData", userData)
  const [passwordValue, setPasswordValue] = useState("");
  const [image, setImage] = useState("")
  const [numberValue, setNumberValue] = useState("");
  const [rangeValue, setRangeValue] = useState("");

  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [fileValue, setFileValue] = useState("");

  const handleInputChange = (event) => {
    // setInputValue(event.target.value)
    setUserData((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  };


  const handleFileChange = (event) => {
    console.log("🚀 ~ file: App.js:107 ~ handleFileChange ~ event", event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageBase64 = reader.result;
      setImage(imageBase64);
    };
    // console.log({ ...reader });
    reader.readAsDataURL(file);
    console.log(reader);
  };








  const handleCheckboxChange = (event) => {
  };





  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleSubmitChange = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("name", fileValue.name);
    formData.append("file", fileValue);
    console.log(formData)

  };

  // Render the form
  return (
    <form onSubmit={handleSubmitChange}>
      {/* Text input */}


      {/* Password input */}
      {/* <label htmlFor="password-example">Password Input:</label>
      <input
        type="password"
        id="userName"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      /> */}


      {/* Range input */}
      {/* <label htmlFor="range-example">Range Input: {rangeValue}</label>
      <input
        min="0"
        max="120"
        step="5"
        type="range"
        id="range-example"
        name="range"
        value={userData.range}
        onChange={handleInputChange}
      /> */}

      {/* Checkbox */}


      {/* Radio buttons */}
      {/* <div>
        <label htmlFor="radio-example-1">
          <input
            name="gender"

            type="radio"
            id="radio-example-1"
            value="male"
            checked={userData.gender === "male"}
            onChange={handleInputChange}
          />
          זכר
        </label>
        <label htmlFor="radio-example-2">
          <input
            name="gender"

            type="radio"
            id="radio-example-2"
            value="female"
            checked={userData.gender === "female"}
            onChange={handleInputChange}
          />
          נקבה
        </label>
      </div> */}


      {/* File input */}
      <label htmlFor="filee" >File Input: 😊</label>
      <input

        type="file"
        id="filee"

        // value={fileValue}
        onChange={handleFileChange}
      />
      {image && <img src={image} alt="" style={{ width: "70px" }} />}
      {/* Submit input */}
      <label htmlFor="submit-example">Submit Input:</label>
      <input
        type="submit"
        id="submit-example"
      />
    </form>
  );
}

export default FormExample;

