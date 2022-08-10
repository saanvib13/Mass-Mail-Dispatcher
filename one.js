var please = document.getElementById("file");

please.addEventListener("change", () => {
  document.querySelector("thead").innerHTML = "VALID EMAIL ADDRESS";
  var button = document.querySelector(".send");
  button.classList.add("btn-success");
  button.innerHTML = "SEND EMAIL";
  const fr = new FileReader();
  var arr = [];
  fr.onloadend = (e) => {
    let r = fr.result.split("\n");

    let a = r.map((e) => {
      return e.split(",");
    });
    var validRegex = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
    var c = 0;

    a.forEach((e) => {
      let m = e
        .map((e) => {
          if (c >= 1) {
            if (validRegex.test(e.split("\r")[0])) {
              arr.push(e.split("\r")[0]);
              return `<td>${e.split("\r")[0]}</td>`;
            }
          }
        })
        .join("");
      c = c + 1;
      const ce = document.createElement("tr");
      ce.innerHTML = m;
      if (ce.innerHTML !== "") {
        document.querySelector("tbody").append(ce);
      }
    });

    button.onclick = function () {
      sessionStorage.setItem("Array1", JSON.stringify(arr));
      window.location.href = "/HTML PAGES/send.html";
    };
  };

  fr.readAsText(please.files[0]);
});
