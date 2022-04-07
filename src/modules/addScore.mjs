import buildScore from './buildScore.mjs'

const addScore = (name, value) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DivHrwqeBsngzJdiusf8/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(() => {
    buildScore();
  });
};

export default addScore;
