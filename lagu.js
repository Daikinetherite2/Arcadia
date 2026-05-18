<script>
const audio = document.getElementById("bgm");
const hint = document.getElementById("musicHint");

// coba autoplay
window.addEventListener("load", async () => {
  try {
    await audio.play();
    hint.style.display = "none";
  } catch (e) {
    // autoplay diblok → tunggu user interaction
    hint.style.display = "block";
  }
});

// kalau user klik di mana saja → paksa play
document.addEventListener("click", async () => {
  try {
    await audio.play();
    hint.style.display = "none";
  } catch (e) {}
}, { once: true });
</script>
