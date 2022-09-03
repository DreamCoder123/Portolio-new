function getEliment(el){
    return document.querySelector(el)
}

let All_skills =getEliment(".All_skills")
let frontend =getEliment(".forntend")
let backend =getEliment(".backend")

function Allskill(){
    All_skills.style.display="grid"
    frontend.style.display="none"
    backend.style.display="none"
}
function Frontend(){
    All_skills.style.display="none"
    frontend.style.display="grid"
    backend.style.display="none"
}
function Backend(){
    All_skills.style.display="none"
    frontend.style.display="none"
    backend.style.display="grid"
}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }