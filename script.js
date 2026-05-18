// FIREBASE CONFIG (ISI DARI PROJECT KAMU)
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const messagesRef = db.ref("messages");

// realtime listener
messagesRef.on("child_added", (data) => {
  const msg = data.val();
  const div = document.createElement("div");
  div.classList.add("msg");
  div.innerText = `${msg.user}: ${msg.text}`;
  document.getElementById("messages").appendChild(div);
});

function sendMessage() {
  const user = document.getElementById("username").value || "anon";
  const text = document.getElementById("message").value;

  if (!text) return;

  messagesRef.push({
    user,
    text
  });

  document.getElementById("message").value = "";
}



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  push,
  onChildAdded,
  set
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let currentUser = null;
let currentGroup = "general";

// login anonymous
signInAnonymously(auth).then((user) => {
  currentUser = user.user.uid;
});
