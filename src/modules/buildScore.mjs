import fetching from './scoreAPI.mjs';

const buildScore = () => {
  const board = document.querySelector('#scoreList');
    const scoreAPI = fetching()
    .then((board) => {
      board.forEach((item) => {
        const listElement = document.createElement('li');

        listElement.innerHTML = `${item.user} : ${item.score}`;
        scoreList.appendChild(listElement);
      });
    });
};

export default buildScore;
