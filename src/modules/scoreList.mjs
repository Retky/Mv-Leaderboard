class List {
  constructor() {
    this.list = [];
  }

  add = (inName, inScore) => {
    const score = { name: inName, score: inScore };
    this.list.push(score);
  };
}

const scoreList = new List();

export { List, scoreList };
