import { db } from "../../fire";
const setGuessPassword = () => {
  db.collection("Passwords")
    .doc("Passwords")
    .get()
    .then((passwords) => {
      let pass= passwords.data().password[Math.floor(Math.random() * passwords.data().password.length)]

      db.collection("Passwords").doc("Password").set({
        password:pass ,
      });
    });
};

export const setData = () => {
  db.collection("Passwords")
    .doc("Password")
    .get()
    .then((snap) => {
      if (!snap.data().password) {
        setGuessPassword();
      }
    });
};
export const getPassword=
  db.collection("Passwords")
  .doc("Password")
  .get()
  .then((snap) => {
      return snap.data().password
    
  });
