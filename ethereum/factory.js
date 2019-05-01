import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xaC5933f6c856C5Bb2577c06284905dF06F9852F1'
);

export default instance;