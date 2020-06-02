module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 8000000
    },
    mutNet1: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 8000000
    },
    mutNet2: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
      gas: 8000000
    },
    mutNet3: {
      host: "127.0.0.1",
      port: 8547,
      network_id: "*",
      gas: 8000000
    },
    mutNet4: {
      host: "127.0.0.1",
      port: 8548,
      network_id: "*",
      gas: 8000000
    },
    mutNet5: {
      host: "127.0.0.1",
      port: 8549,
      network_id: "*",
      gas: 8000000
    },
    mutNet6: {
      host: "127.0.0.1",
      port: 8550,
      network_id: "*",
      gas: 8000000
    },
    mutNet7: {
      host: "127.0.0.1",
      port: 8551,
      network_id: "*",
      gas: 8000000
    },
    mutNet8: {
      host: "127.0.0.1",
      port: 8552,
      network_id: "*",
      gas: 8000000
    },
    mutNet9: {
      host: "127.0.0.1",
      port: 8553,
      network_id: "*",
      gas: 8000000
    },
    mutNet10: {
      host: "127.0.0.1",
      port: 8554,
      network_id: "*",
      gas: 8000000
    }
  },

  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 140
        }
      }
    }
  },

  mocha: {
    enableTimeouts: false
  }
};
