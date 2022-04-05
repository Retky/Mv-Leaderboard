class List {
  constructor() {
      this.list = [];
  };
  add = (inName, inScore) => {
    const score = {name: inName, score: inScore}
    this.list.push(score);
  };
};

let scoreList = new List();

export {scoreList};
