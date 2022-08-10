// window.addEventListener("load", () => {
//     const params = (new URL(document.location)).searchParams;
//     // console.log(params)
//     const rec = params.get('');
//     console.log(rec)

//     // document.getElementById('toarea').innerHTML = rec;
// })
// // document.getElementById("toarea").innerHTML="helloww"

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
