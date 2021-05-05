import React, { useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { db } from "./firebase.js"

function GoLink() {
    const { code } = useParams();
    const history = useHistory();

    useEffect(() => {
        let query = db.collection("urls").where("code", "==", code);
        query.onSnapshot((data) => {
            if(data.empty){
                return history.push("/");
            }
            let finalData = data.docs[0].data();

            window.location.replace(finalData.url);
        });
    }, []);

    return (
        <div>
            <h2>Redirecting...</h2>
        </div>
    );
}

export default GoLink
