const _ = require('lodash');
const io = require('../../Helpers/io');
const Solver = require('../../Helpers/solver').Solver;
const target = 2020;

let getValues = input => _.map(input, d => parseInt(d, 10));

let getSolution = (values, config) => {
  const sorted = _.sortBy(values);
  let indices = _.reverse([...Array(config.operands).keys()]);

  while (indices[config.operands - 1] <= sorted.length - config.operands) {
    let nums = _.map(indices, i => sorted[i]);
    if (_.sum(nums) === target) {
      return nums.reduce((a, b) => a * b);
    }

    // loop without repeating any combinations
    let j = 0;
    while (indices[j] === sorted.length - j - 1) {
      j++;
    }

    indices[j]++;
    while (j > 0) {
      indices[j - 1] = indices[j--] + 1;
    }
  }
};

new Solver(1, io.readLines, getValues, getSolution, [{ operands: 2 }, { operands: 3}]).solve();

// Part 1 solution: 910539
// Part 2 solution: 116724144
