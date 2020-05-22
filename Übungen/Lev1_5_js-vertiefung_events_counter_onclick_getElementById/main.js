let x = 1

document.getElementById("clickme").addEventListener("click", () => {
  document.getElementById("clickme").innerHTML = "Click me: " + x
  x++
})
