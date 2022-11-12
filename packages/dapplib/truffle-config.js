require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note meadow coach hover private olympic genius'; 
let testAccounts = [
"0x6960b39e3cfca5740f8005baa75d61dcc59796ed9655b5340bd45934db6afba6",
"0xcc533edf49b1a14c15922a68b934062e38c9eec9a821d9bbb794fb67e5a3424c",
"0xf1d5b55e8abd0a214980601a94f88f947032d32ac0f735268ea7898e961f3932",
"0x943e254ab8ad3ea05cba85c561dbbb8aa81f34d9f0a913a9f612a3f4fd544334",
"0x287a478a2da0baeb8ec20dea75884f53d6945f185bd342c70a3503ac09828136",
"0xb60d12979b3c54c8d00ea2cf2aa4bc207c1056b38766604b85b0bf104bcccd57",
"0x29e0ce5e02089662205688f3c2c81959dae18bf84d79bd5573e455f2255fbb61",
"0x3e744efc8e00ccc8ea86f2d0eefae116c805b83796740843b35bf6a9ca6ed7c6",
"0x20c4ef689e482d3e336d99de7731e8acfe3df24e1bdd6c510e00996f5a5cc244",
"0xdcc8a32fe6e4ea4202bfcc9ec647964f993eeff07f149a049f4d2005bc4aedc9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


