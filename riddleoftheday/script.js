var word2 = null;

var riddlesData = {
  riddles: [
    {
      date: "2023-08-08",
      word: "bear",
      riddle:
        "What animal walks on two legs in the summer and four legs in the winter?",
    },
    {
      date: "2023-08-09",
      word: "silk",
      riddle: "What breaks when you shout at it?",
    },
    {
      date: "2023-08-10",
      word: "river",
      riddle:
        "I'm a word of letters three, add two and fewer there will be. What am I?",
    },
    {
      date: "2023-08-11",
      word: "fire",
      riddle:
        "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    },
    {
      date: "2023-08-12",
      word: "key",
      riddle:
        "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
    },
    {
      date: "2023-08-13",
      word: "book",
      riddle:
        "I have keys but open no locks. I have space but no room. You can enter but can't go outside. What am I?",
    },
    {
      date: "2023-08-14",
      word: "tree",
      riddle:
        "I'm alive, but without breath; I'm as cold in life as in death; I'm never thirsty, though I always drink. What am I?",
    },
    {
      date: "2023-08-15",
      word: "cloud",
      riddle:
        "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    },
    {
      date: "2023-08-16",
      word: "mirror",
      riddle:
        "I have keys but open no locks. I have space but no room. You can enter but can't go outside. What am I?",
    },
    {
      date: "2023-08-17",
      word: "footsteps",
      riddle: "The more you take, the more you leave behind. What am I?",
    },
    {
      date: "2023-08-18",
      word: "candle",
      riddle:
        "I'm a seed with three letters in my name. Take away two and I'm still the same. What am I?",
    },
    {
      date: "2023-08-19",
      word: "clock",
      riddle:
        "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    },
    {
      date: "2023-08-20",
      word: "shoe",
      riddle:
        "I'm a seed with three letters in my name. Take away two and I'm still the same. What am I?",
    },
    {
      date: "2023-08-21",
      word: "window",
      riddle:
        "I have keys but open no locks. I have space but no room. You can enter but can't go outside. What am I?",
    },
    {
      date: "2023-08-22",
      word: "fire",
      riddle: "The more you take, the more you leave behind. What am I?",
    },
    {
      date: "2023-08-23",
      word: "candle",
      riddle:
        "I'm a seed with three letters in my name. Take away two and I'm still the same. What am I?",
    },
    {
      date: "2023-08-24",
      word: "moon",
      riddle:
        "I have keys but open no locks. I have space but no room. You can enter but can't go outside. What am I?",
    },
    {
      date: "2023-08-25",
      word: "footsteps",
      riddle: "The more you take, the more you leave behind. What am I?",
    },
    {
      date: "2023-08-26",
      word: "book",
      riddle:
        "I'm a seed with three letters in my name. Take away two and I'm still the same. What am I?",
    },
    {
      date: "2023-08-27",
      word: "river",
      riddle:
        "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    },
    {
      date: "2023-08-28",
      word: "window",
      riddle: "The more you take, the more you leave behind. What am I?",
    },
    {
      date: "2023-08-29",
      word: "mirror",
      riddle:
        "I'm a seed with three letters in my name. Take away two and I'm still the same. What am I?",
    },
    {
      date: "2023-08-30",
      word: "shoe",
      riddle:
        "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    },
    {
      date: "2023-08-31",
      word: "cloud",
      riddle: "The more you take, the more you leave behind. What am I?",
    },
  ],
};

function displayRiddleForToday() {
  var currentDate = new Date();
  var formattedDate = currentDate.toISOString().substring(0, 10);
  console.log(formattedDate);
  for (var i = 0; i < riddlesData.riddles.length; i++) {
    if (riddlesData.riddles[i].date === formattedDate) {
      word2 = riddlesData.riddles[i].word;
      var riddle = riddlesData.riddles[i].riddle;

      console.log(`Riddle for today (${formattedDate}):`);
      var ghicitoare = document.getElementById("ghicitoare");
      ghicitoare.innerHTML = riddle;
      break;
    }
  }
}

document.getElementById("text").addEventListener("input", (event) => {
  var inputText = event.target.value;
  if (inputText === word2) {
    document.getElementById(
      "text2"
    ).innerHTML = `Yes, the correct word is ${word2}.`;
  } else {
    document.getElementById("text2").innerHTML = `Hmm, not really!`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  displayRiddleForToday();
});
