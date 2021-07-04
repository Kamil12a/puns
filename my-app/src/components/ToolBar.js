import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "../styles/toolBar.css";
export function ToolBar({
  contextRef,
  setIsDrawing,
  setRubberStatus,
  rubberStatus,
}) {
  const rubberRef = useRef(null);
  const changeColor = (event) => {
    const newColor = event.target.value;
    contextRef.current.strokeStyle = newColor;
  };
  const finishDrawing = () => {
    setIsDrawing(false);
  };
  const activeRubber = () => {
    if(rubberStatus){
        rubberRef.current.innerText = "Rubber";
    }
    else{
        rubberRef.current.innerText = "Pen"
    }
    rubberStatus ? setRubberStatus(false) : setRubberStatus(true);

    setIsDrawing(false);
  };

  return (
    <>
      <section className="toolBar">
        <Button
          ref={rubberRef}
          onClick={activeRubber}
          onMouseMove={finishDrawing}
          variant="primary"
        >
          Rubber
        </Button>
        <Form.Control
          onMouseMove={finishDrawing}
          onClick={changeColor}
          as="select"
        >
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Form.Control>
      </section>
    </>
  );
}
