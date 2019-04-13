import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3F78DFE32aFbdE7ED8B4b4aF2352AA33D1860400'
);

export default instance;