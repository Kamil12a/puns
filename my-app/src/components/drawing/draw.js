export function drawing(event, context, isDrawing) {
  if (!isDrawing) {
    return;
  }
  const x = event.nativeEvent.clientX;
  const y = event.nativeEvent.clientY;
  context.current.lineTo(x, y);
  context.current.stroke();
}
