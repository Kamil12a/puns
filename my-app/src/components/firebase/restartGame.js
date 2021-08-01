import fire from "../../fire";
import { db } from "../../fire";
export function restartGame() {
  console.log("restart");
  db.collection("GameStatus").doc("gamestatus").set({
    gameStatus: false,
  });
  db.collection("Comments")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
    db.collection("UsersActive").doc("UserDrawing").delete()
    db.collection("UsersActive").doc("Users").set({
      users:[]
    })
}
