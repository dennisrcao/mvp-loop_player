
line 80 of sample.jsx
<script>
function togglePlaybackFX(){
  let x = document.getElementById("playback-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleCompressionFX(){
  let x = document.getElementById("compressor-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleEQFX(){
  let x = document.getElementById("eq-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>