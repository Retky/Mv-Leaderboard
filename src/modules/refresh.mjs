import buildScore from './buildScore.mjs';

const freshBtn = document.querySelector('.refresh');

const refresh = () => {
  freshBtn.addEventListener('click', () => {
    buildScore();
  });
};

export default refresh;
