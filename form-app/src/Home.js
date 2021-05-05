import React, { useState } from 'react'
import {db} from "./firebase.js"
import {v4 as uuidv4} from "uuid"

function Home() {
    const host = window.location.href;

    const [{url, short, show}, setUrl] = useState({full: "", short: "", show: false})
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let code = uuidv4();
        await db.collection("urls").add({
            url: url,
            code: code,
        })
        .then (()=> {
            setUrl(inputs => ({ ...inputs, full: url, short: code, show: true }));
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={url} onChange={e => setUrl( inputs => ({...inputs, url: e.target.value}))}/>
                <input type='submit' value='Get URL'/>
            </form>
            {show ? <a href={host + short}>{short}</a> :
            <div/>}
            
        </div>
        
        
    )
}

export default Home
