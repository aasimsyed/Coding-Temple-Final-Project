const contracts = require('../../contracts');

const loadContracts = (contractNames) => {
  return contractNames.reduce((acc, name) => {
    acc[name] = contracts[name];
    return acc;
  }, {});
};

module.exports = {
  loadContracts
};
