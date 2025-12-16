const PASSWORD = "13082024";

const quotes = [
  "Cheisya, kamu adalah rumah ternyamanku 🤍",
  "Sayaang, terima kasih sudah selalu sabar menghadapi aku",
  "Dede, cerewetmu justru bikin hariku hidup 😆💗",
  "Sejak 13 Agustus 2024, duniaku berubah karena kamu",
  "Aku jatuh cinta lagi dan lagi… pada orang yang sama 💕",
  "Cheisya, cintaku ke kamu bukan sementara"
];

let playing = true;
let slideIndex = 0;

function unlock(){
  if (pass.value === PASSWORD) {
    lock.style.display = "none";
    main.classList.remove("hidden");
    music.play();

    startHearts();
    autoQuote();
    initSlideshow();
    showDays();
    autoScroll();
  } else {
    alert("Password salah 💔");
  }
}

function startHearts(){
  setInterval(()=>{
    const h=document.createElement("span");
    h.textContent="💗";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(4+Math.random()*5)+"s";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(()=>h.remove(),9000);
  },350);
}

function autoQuote(){
  let i=0;
  quote.textContent=quotes[0];
  setInterval(()=>{
    i++;
    quote.textContent=quotes[i%quotes.length];
  },4000);
}

function initSlideshow(){
  const slides=document.querySelectorAll(".slide-img");
  slides.forEach((img,i)=>{
    img.style.display=i===0?"block":"none";
    img.style.opacity=i===0?"1":"0";
    img.style.transition="opacity .7s";
  });

  setInterval(()=>{
    slides[slideIndex].style.opacity="0";
    slides[slideIndex].style.display="none";
    slideIndex=(slideIndex+1)%slides.length;
    slides[slideIndex].style.display="block";
    setTimeout(()=>slides[slideIndex].style.opacity="1",50);
  },3500);
}

function showDays(){
  const start=new Date("2024-08-13");
  const now=new Date();
  const days=Math.floor((now-start)/(1000*60*60*24));
  dayCount.textContent=days+" hari bersama 💕";
}

function autoScroll(){
  setInterval(()=>{
    window.scrollBy({top:1,behavior:"smooth"});
  },80);
}

function toggleMusic(){
  if(playing){
    music.pause();
    playIcon.textContent="▶️";
  }else{
    music.play();
    playIcon.textContent="⏸️";
  }
  playing=!playing;
}

function loveAlert(){
  alert("Aku sayang kamu selamanya, Cheisya 💖");
}

