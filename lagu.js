const audio = document.getElementById("bgm");

function startMusic(){
  audio.play().catch(err => {
    console.log("Blocked autoplay:", err);
  });
}
