import React, { useState } from "react";

const Cal = () => {
    const [numDisplay, setNum] = useState('');
    const [ansDisplay, setAns] = useState('');
    
    let showNum = (e) => {
        setNum(numDisplay + e.target.id);
    }

    let clearNum = () => {
        setNum("");
        setAns("");
    }

    let evaluateExpression = () => {
        try {
            const result = eval(numDisplay);
            setAns(result.toString());
        } catch (error) {
            console.error("Invalid expression", error);
            setAns("Error");
        }
    }
    
    return (
        <>
        <center>
        <div style={{maxWidth: "300px"}}>
            <center>
                <h1>React Calculator</h1>

                <input type="text" value={numDisplay} readOnly />

                <div style={{height: "40px", marginTop: "10px"}}>
                    <p style={{margin: "0", padding: "0"}}>{ansDisplay}</p>
                </div>
                
                <div style={{marginTop: "10px"}}>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="1">1</button> 
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="2">2</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="3">3</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="4">4</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="5">5</button> 
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="6">6</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="7">7</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="8">8</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="9">9</button> 
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="0">0</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={clearNum} id="clear">C</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={evaluateExpression} id="=">=</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="-">-</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="+">+</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="/">/</button>
                    <button style={{width: "60px", height: "60px", borderRadius: "10px", marginRight: "10px", marginTop: "15px"}} onClick={showNum} id="*">*</button>
                </div>
            </center>
        </div>
        </center>
        </>
    )
}

export default Cal;
