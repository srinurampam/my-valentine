const noBtn = document.getElementById("noBtn");
const range = document.getElementById("loveRange");
const percent = document.getElementById("percent");

// No button escape 😄
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Live percentage
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
    document.getElementById("resultText").innerText = "My Heart is Yours ❤️";
    document.getElementById("resultImg").src = "images/happy.jpg";
    document.getElementById("resultNote").innerText =
      "This much love makes my life beautiful. I love you forever 💕";
  } else {
    document.getElementById("resultText").innerText = "Hmm… Only this much? 😜";
    document.getElementById("resultImg").src = "images/funny.jpg";
    document.getElementById("resultNote").innerText =
      "It’s okay… I’ll love you 100% anyway 😘";
  }
}
