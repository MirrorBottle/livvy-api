const transactionContract = artifacts.require(".contracts/deployment.sol");

module.exports = function (deployer) {
  deployer.deploy(transactionContract);
};
