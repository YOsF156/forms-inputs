import React from 'react'

function Home() {

    const fets = () => {
        try {

            fetch("http://localhost:3002/api/user/all-users", {
                method: "GET",
                headers: {

                    authorization: "Bearer " + JSON.parse(localStorage.token)
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                })
        } catch (error) {
            console.log("🚀 ~ file: Home.js:17 ~ fets ~ error", error)

        }
    }
    return (
        <div><h1>Home</h1>
            <button onClick={fets}>give me all users</button>
        </div>
    )
}

export default Home