import React, { useState } from "react";
import "./Compose.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


import { useAuthState } from 'react-firebase-hooks/auth';

export default function Compose(props) {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(firebase.auth());


  const sendMessage = () => {
    console.log(message);


    let docRef = firebase.firestore().collection("chats").doc("testRoom").collection("messages").doc();

    docRef.set({
      id: docRef.id,
      text: message,
      author: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(function() {
      console.log("Document successfully written!");
      setMessage("");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  };

  return (
    <div className="compose">
      <input
        type="text"
        className="compose-input"
        value={message}
        placeholder="Type a message, @name"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
        }}
      />

      {props.rightItems}
    </div>
  );
}
