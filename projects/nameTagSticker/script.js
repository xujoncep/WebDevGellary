let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["RUPOK", "JUBAYER", "SAHABUDDIN", "OMI"];

let colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#800000",
  "#8B0000",
  "#FFA500",
  "#FFD700",
  "#6B8E23",
  "#7CFC00",
  "#000080",
  "#8B008B",
  "#FF00FF",
  "#F4A460",
  "#FF3855",
  "#FD3A4A",
  "#FB4D46",
  "#FA5B3D",
  "#FFAA1D",
  "#FFF700",
  "#299617",
  "#A7F432",
  "#2243B6",
  "#5DADEC",
  "#5946B2",
  "#9C51B6",
];

let sticker = function (name) {
  let div = template.content.querySelector("div");
  let nameOfStick = div.querySelector(".name");

  nameOfStick.innerHTML = name;

  div.style.background = colors[Math.floor(Math.random() * colors.length)];

  div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

  let node = document.importNode(div, true);
  wrapper.appendChild(node);
};

setTimeout(refereshPage, 1000);
function refereshPage() {
  location.reload();
}

names.forEach(sticker);
