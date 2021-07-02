import "../../styles/draw.css"
export function Draw({drawActive,cordinatesXY}) {
  return (
    <>
        {drawActive&&( <div style={{position:"absolute",top:cordinatesXY[1],left:cordinatesXY[0]}}className="point"></div>
)}
  
    </>
  );
}