const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JV1cLaJ1leCS3Qcmz7ZM/scores/', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const fetching = async () => {
  try {
    const board = await getScores();
    const scoreBoard = await board.json();
    return scoreBoard.result;
  } catch (err) {
    console.log(err);
    return { result: [] };
  }
};

export default fetching;
