let name =prompt("Adınızı giriniz");

let msg = `Merhaba, ${name}! Hoşgeldin!`
document.querySelector(".gretings>p").innerText = msg;
document.querySelector(".gretings>p").textContent = msg;