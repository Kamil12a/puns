export function finishDrawing(event,context,setIsDrawing){
    context.current.closePath()
    setIsDrawing(false)
  };