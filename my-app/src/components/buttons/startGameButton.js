import { Button } from "react-bootstrap";
import fire from "../../fire";
import { db } from "../../fire";
export function StartGameButton({ setState }) {
  const startGame = () => {
    const colletion = db.collection("UsersActive").doc("Users");
    colletion.onSnapshot((doc)=>{
      if (doc.data().users.length > 1) {
        setState("loaded");
      }
    })
    colletion.get().then((doc) => {
      if(doc.data()){
        if (!doc.data().users.includes(fire.auth().currentUser.uid)) {
          let users = doc.data().users;
          users.push(fire.auth().currentUser.uid);
          colletion.set({
            users: users,
          });
        }
      }
      else{
        colletion.set({
          users:[fire.auth().currentUser.uid]
        })
      }
    
    });
  };
  return (
    <>
      <Button
        onClick={startGame}
        style={{ position: "absolute", top: "40%", right: "50%" }}
        variant="secondary"
      >
        {" "}
        START GAME
      </Button>
    </>
  );
}
