import { useState } from "react";
import { Draw } from "../components/drawing/draw";
import { getCordinates } from "../components/drawing/getCordinates";
import "../styles/drawField.css"
export function DrawField() {
const [drawActive, setDrawActive]=useState(false)
const [cordinateX, setCordinateX]=useState()
const [cordinateY, setCordinateY]=useState()
function drawIsActive(event){
    let cordinatesXY=getCordinates(event)
    setCordinateX(cordinatesXY[0].toString()+"px")
    setCordinateY(cordinatesXY[1].toString()+"px")
    setDrawActive(true)
}
  return (
    <>
        <section className="drawContainer">
            
            <button onClick={drawIsActive} className="drawField">
                <Draw drawActive={drawActive}cordX={cordinateX} cordY={cordinateY}/>
            </button>

        </section>
        
    </>
  );
}