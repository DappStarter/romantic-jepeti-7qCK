require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember erosion idea close bottom general'; 
let testAccounts = [
"0x026aeb57dc9a9db44ec43b7d56a12d288116a8f5b5c3013d2aff59744c656262",
"0xf0251f19d761ff26a7dc313bb2e20b3bc914a976df429e877e5cbe4d60baadaa",
"0x80f5fb49de6ce4902e279ab2d601bb366f8346938c82aa38d75de476f96e4211",
"0xb281c671f7bb4c13f6f8201637d2298805295d0d25ca006f8d9477b8530f2387",
"0x3931610892dc23e527de9b3c54f540ad6e3b83d1ad125b8a91885bd36d53ec62",
"0x113e7bd79aaf6c570916eebe3a17884d606835f0f96eea2588fe61c2fd1a713a",
"0x6504462205bb32b982f8bcadf2b83cc342be77c546998347c499143d8abf2221",
"0x91470deb1a7be1ba2a36dc27dd9fa2b69f13a2308b4e640e662d9c2c990db46e",
"0x3d02bc1482bfc708a22c850ed95a5cad1fbea04379d505a923c412064ee71ccc",
"0x20b1a52c87a5618c635328c92df9fbbb4b0d700ec8038aa75fb7bfcebd416fa1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

