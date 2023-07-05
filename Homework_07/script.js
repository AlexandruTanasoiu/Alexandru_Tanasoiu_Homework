const path = "./data.json";

function pushJsonData(data, freq) {
  let i = 0;
  while (i < data.length) {
    // console.log(i);
    let idFirst = `current_${data[i].title}`;
    // console.log(idFirst);
    let idLast = `last_${data[i].title}`;
    // console.log(idLast);
    document.getElementById(idFirst).innerHTML =
      data[i].timeframes[freq].current;
    document.getElementById(idLast).innerHTML =
      data[i].timeframes[freq].previous;
    i++;
  }
}

const ids = ["daily", "weekly", "monthly"];
ids.forEach((id, index) => {
  document.getElementById(id).classList.remove("active");
  document.getElementById(id).addEventListener("click", function () {
    let toRemove = Array.from(ids); // a fresh copy of ids on each click
    toRemove.splice(index, 1); // the array with ids that have to remove the style
    // removed styling for other than the clicked ids
    toRemove.forEach((id) => {
      console.log(id);
      document.getElementById(id).classList.remove("active_state");
    });
    // apllied styling for clicked id
    document.getElementById(id).classList.add("active_state");
    // push data to HTML
    fetch(path)
      .then((response) => response.json())
      .then((data) => pushJsonData(data, id));
  });
});
