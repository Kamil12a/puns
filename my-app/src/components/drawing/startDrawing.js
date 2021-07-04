
export function startDrawing(event,context,setIsDrawing){

    const x=event.nativeEvent.clientX
    const y= event.nativeEvent.clientY
    context.current.beginPath();
    context.current.moveTo(x , y );
    setIsDrawing(true);
  };
  