const _ = require('lodash');
const io = require('../../Helpers/io');
const Solver = require('../../Helpers/solver').Solver;

let getValues = input => {
  let res = _.sortBy(input.map(v => parseInt(v)));
  res.unshift(0);
  res.push(_.max(res) + 3);
  return res;
};

let getPathCount = values => {
  let max = values[values.length - 1];
  let pathAccum = Array(max).fill(0);
  pathAccum[max] = 1;
  for (let i = max - 1; i >= 0; i--) {
    if (_.includes(values, i)) {
      pathAccum[i] = _.sum([pathAccum[i + 1], pathAccum[i + 2], pathAccum[i + 3]]);
    }
  }

  return pathAccum[0];
}

let getSolution = (values, config, part) => {
  if (part === 1) {
    let m = values.map((v, i) => i == 0 ? v : v - values[i-1]);
    return (d => _.filter(d, v1 => v1 == 3).length * _.filter(d, v2 => v2 == 1).length)(m);
  }

  return getPathCount(values);
};

new Solver(10, io.readLines, getValues, getSolution, [{ }, { }]).solve();

// Part 1 solution: 1917
// Part 2 solution: 113387824750592
