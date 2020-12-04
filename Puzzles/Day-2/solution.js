const _ = require('lodash');
const io = require('../../Helpers/io');
const logger = require('../../Helpers/logger');
const inputFile = 'Puzzles/Day-2/input.txt';

let getInput = () => _.map(io.readLines(inputFile), d => parseInput(d.split(' ')));

let parseInput = parts => {
  return {
    firstNum: parseInt(parts[0].split('-')[0]),
    lastNum: parseInt(parts[0].split('-')[1]),
    letter: parts[1][0],
    password: parts[2]
  };
};

let partOneFilter = r => {
  let count = _.filter([...r.password], l => l === r.letter).length;
  return r.firstNum <= count && count <= r.lastNum;
};

let partTwoFilter = r => {
  return [...r.password][r.firstNum - 1] === r.letter ^ [...r.password][r.lastNum - 1] === r.letter;
};

let input = getInput();
logger.log([_.filter(input, partOneFilter).length, _.filter(input, partTwoFilter).length]);

// Part 1 solution: 418
// Part 2 solution: 616
