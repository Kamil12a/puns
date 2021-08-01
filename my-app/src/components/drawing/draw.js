import { db } from "../../fire";
export function drawing(event, context, isDrawing) {
  if (!isDrawing) {
    return;
  }
  const x = event.nativeEvent.clientX;
  const y = event.nativeEvent.clientY;
  context.current.lineTo(x, y);
  context.current.stroke();
  // db.collection("Drawing").doc().set({
  //   x: x,
  //   y: y,
  // });
}
