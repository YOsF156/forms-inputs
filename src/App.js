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
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [rangeValue, setRangeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [fileValue, setFileValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");
  const [resetValue, setResetValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  // Declare event handlers to update the state variables when the form inputs are changed
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  };
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  const handleColorChange = (event) => {
    setColorValue(event.target.value);
  };
  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };
  const handleFileChange = (event) => {
    console.log(event.target.files);
    setFileValue(event.target.value);
  };
  const handleImageChange = (event) => {
    console.log(event.target.value);
    setImageValue(event.target.value);
  };
  const handleButtonChange = (event) => {
    setButtonValue(event.target.value);
  };
  const handleResetChange = (event) => {
    setResetValue(event.target.value);
  };
  const handleSubmitChange = (event) => {
    event.preventDefault();

  };

  // Render the form
  return (
    <form onSubmit={handleSubmitChange}>
      {/* Text input */}
      <label htmlFor="input-example">Text Input:</label>
      <input
        type="text"
        id="inputexample"
        autoComplete="off"
        // name="input-example"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Password input */}
      <label htmlFor="password-example">Password Input:</label>
      <input
        type="password"
        id="userName"

        // name="userName"
        value={passwordValue}
        onChange={handlePasswordChange}
      />

      {/* Email input */}
      <label >Email Input:

        <input
          required
          type="email"
          id="email-example"
          value={emailValue}
          onChange={handleEmailChange}
        />
      </label>

      {/* Number input */}
      <label htmlFor="number-example">Number Input:</label>
      <input
        type="number"
        id="number-example"
        value={numberValue}
        onChange={handleNumberChange}
      />

      {/* Range input */}
      <label htmlFor="range-example">Range Input: {rangeValue}</label>
      <input
        min="0"
        max="120"
        step="5"
        type="range"
        id="range-example"
        value={rangeValue}
        onChange={handleRangeChange}
      />

      {/* Color input */}
      <label htmlFor="color-example">Color Input:</label>
      <input
        type="color"
        id="color-example"
        value={colorValue}
        onChange={handleColorChange}
      />

      {/* Date input */}
      <label htmlFor="date-example">Date Input:</label>
      <input
        type="date"
        id="date-example"
        value={dateValue}
        onChange={handleDateChange}
      />

      {/* Time input */}
      <label htmlFor="time-example">Time Input:</label>
      <input
        type="time"
        id="time-example"
        value={timeValue}
        onChange={handleTimeChange}
      />

      {/* Textarea */}
      <label htmlFor="textarea-example">Textarea:</label>
      <textarea
        id="textarea-example"
        value={textareaValue}
        onChange={handleTextareaChange}
      />

      {/* Checkbox */}
      <label htmlFor="checkbox-example">
        <input
          type="checkbox"
          id="checkbox-example"
          checked={checkboxValue}
          onChange={handleCheckboxChange}
        />
        Checkbox
      </label>

      {/* Radio buttons */}
      <div>
        <label htmlFor="radio-example-1">
          <input
            type="radio"
            id="radio-example-1"
            value="Option 1"
            checked={radioValue === "Option 1"}
            onChange={handleRadioChange}
          />
          Option 1
        </label>
        <label htmlFor="radio-example-2">
          <input
            type="radio"
            id="radio-example-2"
            value="Option 2"
            checked={radioValue === "Option 2"}
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>

      {/* Select dropdown */}
      <label htmlFor="select-example">Select:</label>
      <select
        id="select-example"
        value={selectValue}
        onChange={handleSelectChange}
      >
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      {/* File input */}
      <label htmlFor="file-example">File Input:</label>
      <input
        multiple
        type="file"
        id="file-example"
        value={fileValue}
        onChange={handleFileChange}
      />


      {/* Button input */}
      <label htmlFor="button-example">Button Input:</label>
      <input
        type="button"
        id="button-example"
        value={buttonValue}
        onChange={handleButtonChange}
      />

      {/* Reset input */}
      <label htmlFor="reset-example">Reset Input:</label>
      <input
        type="reset"
        id="reset-example"
        value={resetValue}
        onChange={handleResetChange}
      />

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

