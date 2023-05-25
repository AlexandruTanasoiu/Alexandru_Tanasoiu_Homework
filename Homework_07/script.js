const path = "./data.json";

function pushJsonData(data, freq) {
  let i = 0;
  while (i < data.length) {
    console.log(i);
    let idFirst = `current_${data[i].title}`;
    console.log(idFirst);
    let idLast = `last_${data[i].title}`;
    console.log(idLast);
    document.getElementById(idFirst).innerHTML =
      data[i].timeframes[freq].current;
    document.getElementById(idLast).innerHTML =
      data[i].timeframes[freq].previous;
    i++;
  }   
}

function button__style(id, state){
  if (state) {
  document.getElementById(id).style.fontWeight = '700';
  document.getElementById(id).style.color = 'white';
  }
  else {
  document.getElementById(id).style.fontWeight = null;
  document.getElementById(id).style.color = null;
  }
}

function daily() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "daily"));
    button__style('daily', 1);
    button__style('weekly', 0);
    button__style('monthly', 0);
  
 }

function weekly() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "weekly"));
    button__style('daily', 0);
    button__style('weekly', 1);
    button__style('monthly', 0);
}

function monthly() {
  fetch(path)
    .then((response) => response.json())
    .then((data) => pushJsonData(data, "monthly"));
    button__style('daily', 0);
    button__style('weekly', 0);
    button__style('monthly', 1);
    
}

document.getElementById("daily").addEventListener("click", daily);
document.getElementById("weekly").addEventListener("click", weekly);
document.getElementById("monthly").addEventListener("click", monthly);

