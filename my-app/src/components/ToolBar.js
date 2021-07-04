import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";
import "../styles/toolBar.css";
export function ToolBar({  contextRef,setIsDrawing ,setRubberStatus}) {
  const changeColor = (event) => {
    const newColor = event.target.value;
    contextRef.current.strokeStyle=newColor
  };
  const finishDrawing=()=>{
      setIsDrawing(false)
  }
  const activeRubber=()=>{
    setRubberStatus(true)
    setIsDrawing(false)
  }

  return (
    <>
      <section className="toolBar">
        <Button onClick={activeRubber} onMouseMove={finishDrawing} variant="primary">Rubber</Button>
        <Form.Control onMouseMove={finishDrawing} onClick={changeColor} as="select">
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Form.Control>
      </section>
    </>
  );
}
