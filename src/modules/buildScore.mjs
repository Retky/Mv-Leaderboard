const li = [
  {name: 'one', score: 23},
  {name: 'two', score: 35}
]

const board = document.querySelector('#scoreList');

const buildScore = () => {
  li.forEach((item) => {
    const listElement = document.createElement('li');

    listElement.innerHTML = `${item.name} : ${item.score}`;
    scoreList.appendChild(listElement);
  });
};

export default buildScore;
