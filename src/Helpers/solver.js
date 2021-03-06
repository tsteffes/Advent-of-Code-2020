const logger = require('./logger');

class Solver {
  constructor(day, inputter, mapper, method, configs) {
    this.fileName = `src/Puzzles/Day-${day < 10 ? '0' : ''}${day}/input.txt`;
    this.mapper = mapper;
    this.inputter = inputter;
    this.day = day;
    this.method = method;
    this.configs = configs;
  }

  solve = () => {
    logger.log(this.day, this.configs.map((c, i) => this.method(this.mapper(this.inputter(this.fileName)), c, i + 1)));
  };
}

exports.Solver = Solver;
