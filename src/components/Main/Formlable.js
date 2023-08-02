import React, { useState } from 'react';
import "./Formlable_style.css";

export default function Formlable(props) {

    const [text, setText] = useState("");
    const upperCaseConvert = () => {
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "Success");
    }

    const lowerCaseConvert = () => {
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "Success");
        
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text cleared", "Success");
    }

    const sentenceCase = () => {
        var sentences = text.trim().split(/[.!?]\s*/);
        var newText = "";

        sentences.map((sentence) => {
            if (sentence.length === 0) {
                return '';
            }

            const firstLetter = sentence.charAt(0).toUpperCase();
            const restOfLetters = sentence.slice(1).toLowerCase();

            newText += firstLetter + restOfLetters + ".";
            return newText;
        })
        setText(newText);
        props.showAlert("Converted to sentence case", "Success");
    };

    const removeSpaces = () =>{
        const sentences = text.trim().split(/\s+/);
        var newText = "";
        sentences.map((sentence) =>{
            if(sentence.length === 0){
                return '';
            }
                
            newText += sentence.trim() + " ";
            return newText;
        })

        setText(newText);
        props.showAlert("Extra spaces removed", "Success");
    }


    const handleChange = (e) => {
        setText(e.target.value);
    }


    const numberOfWords = (text) => {
        if (text.trim() === "") {
            return 0;
        }
        var arr = text.trim().split(/\s+/);
        return arr.length;
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1  style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>Enter text below to analyze</h1>
                    <div className="text_box">
                        <textarea id="textArea" rows="30" cols="100" placeholder="Enter your text here..." style={{ backgroundColor: props.mode === 'dark' ? '#adb5bd' : 'white', color : props.mode === 'dark' ? 'black' : 'black'}} value={text} onChange={handleChange}></textarea>
                    </div>
                    <button id="btn" onClick={upperCaseConvert}>Convert to UpperCase</button>
                    <button id="btn" onClick={lowerCaseConvert}>Convert to LowerCase</button>
                    <button id="btn" onClick={clearText}>Clear Text</button>
                    <button id="btn" onClick={sentenceCase}>Sentence Case</button>
                    <button id = "btn" onClick = {removeSpaces}>Remove extra spaces</button>

                </div>
                <div className="container-md"  style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
                    <h2>Your text summary</h2>
                    <p>{numberOfWords(text)} words {text.length} characters</p>

                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>

    )
};