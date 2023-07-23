import React, { Component, useState, useEffect} from 'react';
import styles from '../scss/styles.scss'

function PromptBox() {
    const [singlePrompt, setSinglePrompt] = useState({title:""});

    useEffect(() => {
        // should be a specific endpoint
        fetch('/getPrompt', {headers: {'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((singlePrompt) => {
                console.log('Single Prompt: ', singlePrompt)
                setSinglePrompt(singlePrompt)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
      <div id = "promptbox">
        <p>your prompt today is:</p>
        <a href = {singlePrompt.hyperlink} target="_blank"><h1>{singlePrompt.title}</h1></a>
        <p>how hard was it? </p>
        <div class = 'buttons'>
          <button id = "easy"><span>ez pz</span></button>
          <button id = "medium"><span>it was okay</span></button>
          <button id = "hard"><span>i cried</span></button>
        </div>
      </div>
    );
}

export default PromptBox;
