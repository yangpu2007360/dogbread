import React from 'react'
import { useState, useEffect } from 'react';

function Dog({ breed }) {
    const [breedURL, setbreedURL] = useState("")

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then((response) => response.json())
            .then((data) => setbreedURL(data.message[0]));
    }, []);

    return (
        <div>
            <img src={breedURL} width="400" height="500"></img>
            <p>{breed}</p>
        </div >
    )
}

export default Dog