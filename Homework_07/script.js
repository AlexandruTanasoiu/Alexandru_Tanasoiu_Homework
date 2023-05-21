const path = "./data.json";
let ok = 0;

function parseFile(data) {}
function pushJsonData(data, freq) {
  let i = 0;
  while (i < data.length) {
    console.log(i);
    let idFirst = "current_" + data[i].title;
    console.log(idFirst);
    let idLast = "last_" + data[i].title;
    console.log(idLast);
    document.getElementById(idFirst).innerHTML =
      data[i].timeframes[freq].current;
    document.getElementById(idLast).innerHTML =
      data[i].timeframes[freq].previous;
    i++;
  }
}

function main_function() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "monthly"));
}

document.getElementById("daily").addEventListener("click", main_function);

// document
// .getElementById("daily")
// .addEventListener("click", main_function());
