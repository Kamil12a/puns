export function Rubber({context}) {
    function rubberActive(){
        console.log(context)
        context.current.clearRect(0, 0, 1000, 1000);
    }
  return (
    <>
     <button onClick={rubberActive}>Rubber</button>

    </>
  );
}
