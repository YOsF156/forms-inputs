import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsLogin }) {
    const [userData, setUserData] = useState({ userName: "", password: "" })
    console.log("🚀 ~ file: Login.js:6 ~ Login ~ userData", userData)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:3002/api/user/register", {
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    localStorage.token = JSON.stringify(data.token)
                    setIsLogin(true);
                    navigate("/")
                })
        } catch (error) {
            console.log("🚀 ~ file: Login.js:32 ~ handleSubmit ~ error", error)

        }
    }


    return (
        <div>
            <h1>
                please enter your details
            </h1>
            <form onSubmit={handleSubmit}>
                <label>user name
                    <input type="text"
                        name="userName"
                        required
                        value={userData.userName}
                        onChange={handleChange} />

                </label>
                <label>password
                    <input type="password"
                        name="password"
                        required
                        value={userData.password}
                        onChange={handleChange} />

                </label>
                <input type="submit" />
            </form>


        </div>
    )
}

export default Login