import addScore from './addScore.mjs';
import {scoreList} from './scoreList.mjs';

const scoreForm = document.querySelector('#addScore');
const scoreName = scoreForm.querySelectorAll('input')[0];
const scoreVal = scoreForm.querySelectorAll('input')[1];
const scoreBtn = scoreForm.querySelectorAll('input')[2];

const formBtn = () => {
  scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (scoreName.value !== '' && scoreVal.value >= 0) {
      addScore(scoreName.value, scoreVal.value);
      scoreList.add(scoreName.value, scoreVal.value);
      scoreName.value = '';
      scoreVal.value = '';
    };
  });
};

export default formBtn;

// TODO: Change scoreVal to type text [numbers | > 0]
