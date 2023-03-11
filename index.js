function OpeningCeremony(callback) {
  setTimeout(() => {
    console.log("Let the Games begin");
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log("initial score", score);
    Race100M(callback, score);
  }, 1000);
}

function Race100M(callback, score) {
  setTimeout(() => {
    const randomScore = {
      red: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
    };
    const sortedColor = Object.keys(randomScore).sort(
      (a, b) => randomScore[a] - randomScore[b]
    );
    console.log(sortedColor);

    score[sortedColor[0]] += 50;
    score[sortedColor[1]] += 25;
    console.log("Score After 100M race", score);
    Longjump(score, callback);
  }, 3000);
}
function Longjump(score, callback) {
  let keys = Object.keys(score);
  let aRandomKey = keys[Math.floor(Math.random() * keys.length)];
  score[aRandomKey] += 150;
  setTimeout(() => {
    console.log(`"${aRandomKey}" won the Longjump and the new score is`, score);
    HighJump(score, callback);
  }, 2000);
}

function HighJump(score, callback) {
  const highestJumpColor = prompt(
    "What color secured the highest jump?",
    "red"
  );
  if (
    Object.keys(score).includes(highestJumpColor) &&
    highestJumpColor !== null &&
    highestJumpColor !== ""
  ) {
    console.log(`${highestJumpColor} won the High Jump!`);
    score[highestJumpColor] += 100;
    console.log("Score after High Jump:", score);
    AwardCeremony(score);
  } else {
    console.log("Event was cancelled");
    AwardCeremony(score);
  }
}
function AwardCeremony(scores) {
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`
  );
  console.log(
    `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`
  );
  console.log(
    `${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`
  );
  console.log(
    `${sortedScores[3][0]} came third with ${sortedScores[3][1]} points.`
  );
}

OpeningCeremony(Race100M);
