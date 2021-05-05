import React, { useState } from 'react'
import {db} from "./firebase.js"
import {v4 as uuidv4} from "uuid"

function Home() {
    const [url, setUrl] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        let code = uuidv4();
        await db.collection("urls").add({
            url: url,
            code: code,
        })
        
        alert("URL is: " + code)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={url} onChange={e => setUrl(e.target.value)}/>
                <input type='submit' value='Get URL'/>
            </form>
        </div>
    )
}

export default Home
