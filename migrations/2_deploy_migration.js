const CosmToken = artifacts.require("Cosm");
const GovernorAlpha = artifacts.require("GovernorAlpha");
const TimeLock = artifacts.require("Timelock");

const AdminAccount = "";
const Delay = 60 * 60 * 24 * 3;

module.exports = async function (deployer) {
    const cosm = await deployer.deploy(CosmToken, AdminAccount);
    const timelock = await deployer.deploy(Timelock, AdminAccount, Delay);
    const governorAlpha = await deployer.deploy(GovernorAlpha, timelock.address, cosm.address);
}