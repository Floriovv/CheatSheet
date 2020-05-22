document.addEventListener("keypress", logKey);

function logKey(e){
  document.getElementById("code").innerHTML = ` ${e.code}`;
  document.getElementById("key").innerHTML = ` ${e.key}`;
  document.getElementById("keyCode").innerHTML = ` ${e.keyCode}`;
}
