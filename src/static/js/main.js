const FUNNY_BLURBS = [
  "Feature-creeping random blurbs into the website from",
  "Making websites with a bus quotient <1 from",
  "Still watching Dr. Who from",
  "Dirking Gently from",
  "Losing Space from",
  "Legally Acquiring Media from",
  "Unable to think of more splash texts from"
];

document.getElementById("funny-message").textContent = FUNNY_BLURBS[Math.floor(Math.random() * FUNNY_BLURBS.length)];
