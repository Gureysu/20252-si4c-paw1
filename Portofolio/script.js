// ALERT BUTTON
function showAlert() {
  alert("Terima kasih sudah tertarik! 😊");
}

// TYPING EFFECT
const text = "Halo, Saya Rahmat Arif Dwi Saputran  👋";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();