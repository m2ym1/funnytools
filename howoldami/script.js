var calendar = document.getElementById("calendar");

calendar.addEventListener("input", (event) => {
  var dataSelectata = new Date(event.target.value);
  var dataCurenta = new Date();

  var difMilisecunde = Math.abs(dataSelectata - dataCurenta);
  var difZile = Math.floor(difMilisecunde / (1000 * 60 * 60 * 24));
  var days = document.getElementById("days");
  days.innerHTML = difZile;
});
