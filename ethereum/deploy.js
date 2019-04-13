const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'scout science novel hood napkin master nasty sail cart armed novel floor',
    'https://rinkeby.infura.io/v3/be9ec77ef29c44e787765e12ca404111'
);

const web3 = new Web3(provider);

//console.log("befofe calling deploy");
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account to be used for deployment',accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({gas: '1000000', from: accounts[0]});
    //console.log(interface);
    console.log('contract deployed at address: ',result.options.address);
};
deploy();
