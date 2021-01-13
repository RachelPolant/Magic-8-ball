const answers = [
  "Indubitably!",
  "Oh, you betcha",
  "Without a doubt",
  "Ermahgerd!! Totes!",
  "Count it!",
  "Madame Rachel says, 'Hell yessss!'",
  "Most likely",
  "Outlook does not suck",
  "Yes",
  "Signs point to yes",
  "Meh",
  "Definitely not, no way",
  "My magic 8 ball said no",
  "Outlook about as good as 2020 was",
  "Very doubtful",
  "Don't make decisions based on a magic 8 ball, duh",
  "Take a nap and ask again later",
  "Um, better not tell you now. Have some beer first",
  "I need a nap. Ask later",
  "Focus harder and ask again",
];

window.onload = function () {
  let eight = document.getElementById("eight");
  let answer = document.getElementById("answer");
  let eightball = document.getElementById("eight-ball");
  let question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Ask What It Is You Must Know!");
    } else {
      eight.innerText = "";
      let num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};
