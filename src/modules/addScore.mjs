const scoreHTML = document.querySelector('#scoreList');

const addScore = (name, value) => {
  const scoreElement = document.createElement('li');
  // THIS URL IS FOR TESTING ONLY
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JV1cLaJ1leCS3Qcmz7ZM/scores/', {
    method: 'POST',
    body: JSON.stringify({
	    user: name,
	    score: value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addScore;
