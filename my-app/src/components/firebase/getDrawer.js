import fire from "../../fire";
import { db } from "../../fire";
export const  getDrawer=
  db.collection("UsersActive")
    .doc("UserDrawing")
    .get()
    .then((snap) => {
      if (snap.data().user === fire.auth().currentUser.uid) {
        return true
      } else {
        return false;
      }
    });

