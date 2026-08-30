document.getElementById("year").textContent=new Date().getFullYear();
const t=document.getElementById("top");
addEventListener("scroll",()=>t.style.display=scrollY>300?"grid":"none");
t.onclick=()=>scrollTo({top:0,behavior:"smooth"});