import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [arr, setArr] = useState(["No Moves"]);

    let updateBlue = ()=>{
        
        setMoves((prev)=>{
           return {...moves, blue: moves.blue+1}
        });
        setArr((prevArr)=> {return [...prevArr, "Blue Moves"]});
    }
    let updateYellow = ()=>{
        
        setMoves((prev)=>{
           return {...moves, yellow: moves.yellow+1}
        });
    }
    let updateGreen = ()=>{
       
        setMoves((prev)=>{
           return {...moves, green: moves.green+1}
        });
    }
    let updateRed = ()=>{
        
        setMoves((prev)=>{
           return {...moves, red: moves.red+1}
        });
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color:"black",}}onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}