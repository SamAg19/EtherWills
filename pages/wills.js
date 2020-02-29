const WillStorage = require('./../ethereum/build/contracts/WillStorage.json');

export const wills = async () => {
	return await new window.web3.eth.Contract(WillStorage['abi'], '0xd47dF9228629F0072378d5b4e0157EB6ca534f0e');
};
