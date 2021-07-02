import "../../styles/draw.css"
import { getCordinates } from "./getCordinates";
import { useEffect,useState } from "react";
export function Draw({drawActive,cordX,cordY}) {
  return (
    <>
        {drawActive&&( <div style={{position:"absolute",top:cordY,left:cordX}}className="point"></div>
)}
  
    </>
  );
}