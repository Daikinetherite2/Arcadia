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
