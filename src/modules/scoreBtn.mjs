import addScore from './addScore.mjs'

const scoreForm = document.querySelector('#addScore');
const scoreName = scoreForm.querySelectorAll('input')[0];
const scoreVal = scoreForm.querySelectorAll('input')[1];
const scoreBtn = scoreForm.querySelectorAll('input')[2];

const formBtn = () => {
  scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (scoreName.value !== '' && scoreVal.value >= 0) {
      console.log(scoreName.value);
      addScore(scoreName.value, scoreVal.value)
    };
  });
};

export default formBtn;

// TODO: Change scoreVal to type text [numbers | > 0]
