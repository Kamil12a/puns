import { useState } from "react";
import { Draw } from "../components/drawing/draw";
import { getCordinates } from "../components/drawing/getCordinates";
import "../styles/drawField.css"
export function DrawField() {
const [drawActive, setDrawActive]=useState(false)
const [cordinatesXY, setCordinateXY]=useState()

function drawIsActive(event){
    let cordinatesXY=getCordinates(event)
    setCordinateXY(cordinatesXY)
    console.log(cordinatesXY)

    setDrawActive(true)
}
  return (
    <>
        <section className="drawContainer">
            
            <button onClick={drawIsActive} className="drawField">
                {/* <Draw drawActive={drawActive} cordinatesXY={cordinatesXY}/> */}
            </button>

        </section>
        
    </>
  );
}