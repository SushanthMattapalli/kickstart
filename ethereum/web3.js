import Web3 from 'web3';

let web3;

if( typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //Flow is inside browser and metamask installed on browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    //Flow is in Server (or) in browser which don't have metamask installed on it
    const provider =  new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/be9ec77ef29c44e787765e12ca404111'
    );
    web3 = new Web3(provider);
}

export default web3;