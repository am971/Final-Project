var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var addmodal2 = document.getElementById("addmodal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("addclose")[0];

btn.onclick = function() {
  addmodal2.style.display = "block";
}
span.onclick = function() {
  addmodal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == addmodal2) {
    addmodal2.style.display = "none";
  }
}

function test1d(){
let c1 = document.getElementById ("c1");
let c2 = document.getElementById ("c2");
let c3 = document.getElementById ("c3");
if (c1.onclick) {c1.style.backgroundColor = "green";}

 if (c2.onclick)  {c2.style.backgroundColor = "red"}
 if (c3.onclick)  {c3.style.backgroundColor = "red"}

}


function test2() {let c4 = document.getElementById ("c4");
let c5 = document.getElementById ("c5");
let c6 = document.getElementById ("c6");
if (c6) {c6.style.backgroundColor = "green";}

if (c4)  {c4.style.backgroundColor = "red"}
 if (c5)  {c5.style.backgroundColor = "red"}
}

function test3() {let c7 = document.getElementById ("c7");
let c8 = document.getElementById ("c8");
let c9 = document.getElementById ("c9");
if (c9) {c9.style.backgroundColor = "green";}

if (c8)  {c8.style.backgroundColor = "red"}
 if (c7)  {c7.style.backgroundColor = "red"}
  
}

let myVar;
  function myFunction() {
    myVar = setTimeout(showPage, 1000);
  }
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
  }
