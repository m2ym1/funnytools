var fortuneCookieMessages = [
  "You will find unexpected joy in the next week.",
  "A surprise awaits you at the end of the month.",
  "Your hard work will pay off soon.",
  "A new opportunity will come your way.",
  "Your creativity will lead to success.",
  "Embrace change; it will lead to growth.",
  "Kindness will bring you good fortune.",
  "A friend will offer valuable advice.",
  "Good things come to those who wait.",
  "Travel is in your future.",
  "Your determination will overcome any obstacle.",
  "Laughter is the key to happiness.",
  "Success is right around the corner.",
  "A new friendship will brighten your day.",
  "Listen to your intuition; it knows the way.",
  "A financial gain is on its way to you.",
  "Your positivity is contagious.",
  "Be prepared for a pleasant surprise.",
  "Your efforts will be recognized and rewarded.",
  "Adventure awaits; seize the opportunity.",
  "A challenge will lead to personal growth.",
  "Your future looks bright; keep moving forward.",
  "New experiences will broaden your horizons.",
  "Generosity will bring you good karma.",
  "Trust in yourself; you have the answers.",
  "Love and friendship will fill your life.",
  "The best is yet to come.",
  "Stay open to new possibilities.",
  "Your smile will bring you good luck.",
  "Believe in yourself; you're capable of greatness.",
];

function generate() {
  var randomIndex = Math.floor(Math.random() * fortuneCookieMessages.length);
  var mesaj = document.getElementById("mesaj");
  mesaj.innerHTML = fortuneCookieMessages[randomIndex];
}
