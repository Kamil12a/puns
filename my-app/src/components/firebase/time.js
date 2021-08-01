import { db } from "../../fire";
export function time() {
  const collection = db.collection("GameStatus").doc("timer");
  let date;
  collection.get().then((snap) => {
    if (snap.data().timer === 0) {
      date = new Date().getTime();
      collection.set({
        timer: date
      });
    }
  });

}
