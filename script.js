//your JS code here. If required.
function modifyText(){
  let textContent = document.getElementById("status");
  textContent.innerHTML = `<h1>Entered Metaverse</h1>`;
}
let button = document.getElementById("enterBtn");
button.addEventListener("click",modifyText);