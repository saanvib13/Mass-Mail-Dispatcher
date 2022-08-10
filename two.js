

var sessionString = sessionStorage.getItem("Array1");
var arr2 = JSON.parse(sessionString);
console.log(arr2[0]);
document.getElementById("toarea").innerHTML = arr2;


function send() {
  document.getElementById("toarea").innerHTML = "";
  document.getElementById("message").value = "";
  s = document.getElementById("alt");
  s.classList.add("show");
}
