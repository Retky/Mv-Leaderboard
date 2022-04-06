const scoreHTML = document.querySelector('#scoreList');

const addScore = (name, value) => {
  const scoreElement = document.createElement('li');
  //THIS URL IS FOR TESTING ONLY
  fetch('https://apitry-58971-default-rtdb.firebaseio.com/games/-N--QAwimOYIiEsc5i32.json', {
    method: 'POST', body: JSON.stringify({
	    "user": name,
	    "score": value
    })
  });
};

export default addScore;
