const _ = require('lodash');
const io = require('../../Helpers/io');
const Solver = require('../../Helpers/solver');
const partOneConfigs = [{ rise: 1, run: 3 }];
const partTwoConfigs = [{ rise: 1, run: 1 }, { rise: 1, run: 3 }, { rise: 1, run: 5 }, { rise: 1, run: 7 }, { rise: 2, run: 1 }];

let getInput = (inputFile) => io.readLines(inputFile);

let countTrees = (map, config) => {
  let positions = _.map([...Array(map.length).keys()], y => [(y * config.run) % map[0].length, (y * config.rise)]);
  return _.filter(_.filter(positions, p => p[1] < map.length), p => map[p[1]][p[0]] === '#').length;
};

let getSolution = (input, config) => {
  return config.configs.reduce((a, b) => a * countTrees(input, b), 1);
};

let solver = new Solver.Solver(3, getInput, getSolution, [{ configs: partOneConfigs }, { configs: partTwoConfigs }]);
solver.solve();

// Part 1 solution: 228
// Part 2 solution: 6818112000
