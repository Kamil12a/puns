import { useEffect, useState } from "react";
import { restartGame } from "../firebase/restartGame";
import { db } from "../../fire";
export function Timer() {
  const [timeDate, setTimeDate] = useState(null);
  useEffect(() => {
    getTimer();
  }, []);
  const getTimer = () => {
    let time;
    const collection = db.collection("GameStatus").doc("timer");
    collection.onSnapshot((snap) => {
      time = snap.data().timer;
    });
    const intervalTimer = setInterval(() => {
      let date = new Date().getTime();
      if (date - time < 1000) {
        let timerTime1 = 99;
        setTimeDate(timerTime1);
      } else if (date - time < 10000) {
        let timerTime10 = 99 - parseInt((date - time).toString().slice(0, 1));
        setTimeDate(timerTime10);
      } else {
        let timerTime = 98 - parseInt((date - time).toString().slice(0, 2));
        setTimeDate(timerTime);
      }
      if (date - time > 99000) {
        date = 0;
        time = 0;
        restartGame();
        clearInterval(intervalTimer);
        collection.set({
          timer: 0,
        });
      }
    }, 1000);
  };
  return (
    <>
      <p style={{ position: "absolute", top: "20px", right: "30%" }}>
        {timeDate}
      </p>
    </>
  );
}
