require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        local: {
          url: "http://127.0.0.1:9650/ext/bc/VHTNqDtUS13RpDNjKMZwhtPkD1EQBv7NdG3twG4SWAhLzbGC6/rpc",
          accounts: ["56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"],
          chainId: 1234,
        }
      }
};