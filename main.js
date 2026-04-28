let infoCont = document.querySelector(".info-cont");

for (let i = 0; i < 2; i++) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let text = document.createTextNode("host:");

  div.appendChild(text);
  div.appendChild(span);
  infoCont.appendChild(div);
}

let divs = document.querySelectorAll(".info-cont div");
divs[4].innerHTML = "<h3>pathname:</h3><span></span>";
divs[5].innerHTML = "<h3>port:</h3><span></span>";

let spans = document.getElementsByTagName("span");
spans[0].innerHTML = location.href;
spans[1].innerHTML = location.protocol;
spans[2].innerHTML = location.host;
spans[3].innerHTML = location.hostname;
spans[4].innerHTML = location.pathname;
spans[5].innerHTML = location.port;

infoCont.style.setProperty("height", "unset");

let input = document.getElementById("inp");

let newValue;

console.log(newValue);
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("go")) {
        newValue = `https://${input.value}.com`;
        location.assign(newValue);
        input.value = "";
    }
    if (e.target.classList.contains("replace")) {
        newValue = `https://${input.value}.com`;

        location.replace(newValue);
        input.value = "";
    }
    if (e.target.classList.contains("reload")) {
        location.reload();
        input.value = "";
    }
});
