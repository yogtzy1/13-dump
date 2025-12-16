const PASSWORD = "130824";

const quotes = [
  "Kamu adalah rumah ternyamanku 🤍",
  "Aku jatuh cinta setiap hari",
  "Terima kasih sudah bertahan",
  "Cinta ini sederhana tapi tulus",
  "Selamanya denganmu 💕"
];

let slideIndex = 0;
let playing = true;

function unlock(){
  if(pass.value === PASSWORD){
    lock.style.display="none";
    main.classList.remove("hidden");
    music.play();
    autoQuote();
    slideshow();
    showDays();
  }else{
    alert("Password salah");
  }
}

function autoQuote(){
  let i=0;
  quote.textContent=quotes[0];
  setInterval(()=>{
    i++;
    quote.textContent=quotes[i%quotes.length];
  },4000);
}

function slideshow(){
  const slides=document.querySelectorAll(".slide-img");
  slides.forEach((img,i)=>{
    img.style.display=i===0?"block":"none";
  });

  setInterval(()=>{
    slides[slideIndex].style.display="none";
    slideIndex=(slideIndex+1)%slides.length;
    slides[slideIndex].style.display="block";
  },3500);
}

function showDays(){
  const start=new Date("2024-08-13");
  const now=new Date();
  const days=Math.floor((now-start)/(1000*60*60*24));
  dayCount.textContent=days+" hari bersama";
}

function toggleMusic(){
  if(playing){
    music.pause();
    playIcon.textContent="▶";
  }else{
    music.play();
    playIcon.textContent="⏸";
  }
  playing=!playing;
}

function loveAlert(){
  alert("Aku sayang kamu selamanya 💗");
}

