import Connex from '@vechain/connex/esm'

const Node193 = 'https://node.vechain.best'
const Gene193 = {"number":0,"id":"0x0000000022d6ba16de61754e652d72226461eeac2559a3f099271f6704ff8d7c","size":170,"parentID":"0xffffffff31393320546573744e65740000000000000000000000000000000000","timestamp":1617091200,"gasLimit":10000000,"beneficiary":"0x0000000000000000000000000000000000000000","gasUsed":0,"totalScore":0,"txsRoot":"0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0","txsFeatures":0,"stateRoot":"0xb532c4b90454690372d29af3559375ff9d6a35bf3e1d34edf5260615e395566a","receiptsRoot":"0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0","backerSignaturesRoot":"0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0","totalQuality":0,"signer":"0x0000000000000000000000000000000000000000","isTrunk":true,"transactions":[]}

export function createConnex() {
    return new Connex({node:Node193, network: Gene193})
}
