export function rubbering(event, context, isDrawing) {
    if(!isDrawing){
      return
    }
    const x = event.nativeEvent.clientX;
    const y = event.nativeEvent.clientY;
    context.current.clearRect(x, y, 30, 30)
  
  }
  