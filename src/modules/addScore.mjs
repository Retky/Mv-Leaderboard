const scoreHTML = document.querySelector('#scoreList');

const addScore = (name, value) => {
  const scoreElement = document.createElement('li');

  scoreElement.innerHTML = `${name} : ${value}`;
  scoreHTML.appendChild(scoreElement);
};

export default addScore;
