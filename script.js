const noBtn = document.getElementById("noBtn");
const range = document.getElementById("loveRange");
const percent = document.getElementById("percent");

/* Move NO button so it cannot be clicked 😄 */
function moveNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Live percentage update */
range.oninput = () => {
  percent.innerText = range.value;
};

function goStep2() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function showResult() {
  const value = range.value;

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

if (value >= 80) {
  document.getElementById("resultText").innerText = "My Heart Is Yours ❤️";
  document.getElementById("resultImg").src = "images/happy.jpg";
  document.getElementById("resultNote").innerText =
    "This much love makes my life complete. I love you forever 💕💖\n\nHappy Valentine's Day 💘🌹";
} else {
    document.getElementById("resultText").innerText = "Only this much? 😜";
    document.getElementById("resultImg").src = "images/funny.jpg";
    document.getElementById("resultNote").innerText =
      "No worries… I’ll love you 100% always 😘";
  }
}
