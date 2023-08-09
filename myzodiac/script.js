var calendar = document.getElementById("calendar");
var zodii = {
  Capricorn: { start: "12-22", end: "01-20" },
  Aquarius: { start: "01-21", end: "02-19" },
  Pisces: { start: "02-20", end: "03-20" },
  Aries: { start: "03-21", end: "04-20" },
  Taurus: { start: "04-21", end: "05-21" },
  Gemini: { start: "05-22", end: "06-21" },
  Cancer: { start: "06-22", end: "07-23" },
  Leo: { start: "07-24", end: "08-23" },
  Virgo: { start: "08-24", end: "09-23" },
  Libra: { start: "09-24", end: "10-23" },
  Scorpio: { start: "10-24", end: "11-22" },
  Sagittarius: { start: "11-23", end: "12-21" },
};

calendar.addEventListener("input", (event) => {
  var dataSelectata = event.target.value;
  var zodiea = determinaZodie(dataSelectata);
  var zodie = document.getElementById("zodie");
  zodie.innerHTML = zodiea;
});

function determinaZodie(data) {
  var dataParts = data.split("-");
  var luna = parseInt(dataParts[1]);
  var zi = parseInt(dataParts[2]);

  var zodie = null;

  for (var z in zodii) {
    var startParts = zodii[z].start.split("-");
    var endParts = zodii[z].end.split("-");
    var startLuna = parseInt(startParts[0]);
    var startZi = parseInt(startParts[1]);
    var endLuna = parseInt(endParts[0]);
    var endZi = parseInt(endParts[1]);

    if (
      (luna === startLuna && zi >= startZi) ||
      (luna === endLuna && zi <= endZi) ||
      (luna > startLuna && luna < endLuna)
    ) {
      zodie = z;
      break;
    }
  }

  return zodie;
}
