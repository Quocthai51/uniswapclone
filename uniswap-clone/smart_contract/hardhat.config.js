require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/5uWUTn_vnakUrrTzAslhzGNo_lndU4ji',
      accounts: [
        '89032a8ecd990a87b85b702232f433644e296c8641986ec3e509849302c3c5cf',
      ],
    },
  },
}
