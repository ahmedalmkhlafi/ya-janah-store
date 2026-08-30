document.querySelectorAll(".link-card").forEach(card=>{
  card.addEventListener("click",()=> {
    if(navigator.vibrate) navigator.vibrate(25);
  });
});
