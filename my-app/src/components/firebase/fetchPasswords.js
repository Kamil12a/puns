import { db } from "../../fire";
export const fetchData = db
  .collection("Passwords")
  .doc("Passwords")
  .get()
  .then((snap) => {
    let password = snap.data().passwords;
    return password[Math.floor(Math.random() * password.length)];
  });
