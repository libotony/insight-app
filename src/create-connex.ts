import Connex from '@vechain/connex/esm'

const Node193 = 'https://node.vechain.best'
const Gene193 = { "number": 0, "id": "0x00000000c1f6ae9b964a671a5ea99cc21654e1a1abcb2b3b722fe8ac2337ad35", "size": 170, "parentID": "0xffffffff31393320546573744e65740000000000000000000000000000000000", "timestamp": 1615788000, "gasLimit": 10000000, "beneficiary": "0x0000000000000000000000000000000000000000", "gasUsed": 0, "totalScore": 0, "txsRoot": "0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0", "txsFeatures": 0, "stateRoot": "0x1de1b9dcc80f61bc3fb2e52b6682e7cba4a62b894546398e846455c24fd778c1", "receiptsRoot": "0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0", "backerSignaturesRoot": "0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0", "totalQuality": 0, "signer": "0x0000000000000000000000000000000000000000", "isTrunk": true, "transactions": [] }

export function createConnex() {
    return new Connex({node:Node193, network: Gene193})
}
