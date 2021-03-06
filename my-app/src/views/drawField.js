import { useEffect, useState, useRef } from "react";
import { startDrawing } from "../components/drawing/startDrawing";
import { drawing } from "../components/drawing/draw";
import { finishDrawing } from "../components/drawing/finishDraw";
import "../styles/drawField.css";
import { ToolBar } from "../components/views/ToolBar";
import { rubbering } from "../components/drawing/rubbering";
import "bootstrap/dist/css/bootstrap.min.css";
export function DrawField() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [rubberStatus, setRubberStatus] = useState(false);
  useEffect(() => {
    getContext();

  }, []);

  const getContext = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };
  const startDraw = (event) => {
    startDrawing(event, contextRef, setIsDrawing, isDrawing);
  };
  const draw = (event) => {

    if (!rubberStatus) {
      drawing(event, contextRef, isDrawing);
    } else {
      rubbering(event, contextRef, isDrawing);
    }
  };
  const finishDraw = (event) => {
    finishDrawing(event, contextRef, setIsDrawing);
  };

  return (
    <>
      <section className="drawContainer">
        <canvas
          className="drawField"
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseUp={finishDraw}
          onMouseMove={draw}
        ></canvas>
      </section>
      <ToolBar
        contextRef={contextRef}
        setIsDrawing={setIsDrawing}
        setRubberStatus={setRubberStatus}
        rubberStatus={rubberStatus}
        isDrawing={isDrawing}
      />

    </>
  );
}
