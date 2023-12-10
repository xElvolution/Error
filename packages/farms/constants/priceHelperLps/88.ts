import { victionTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WVIC-USDT LP',
    lpAddress: '0x597417F750f67a7F9Ca543161CF1eD543022DF5b',
    quoteToken: victionTestnetTokens.usdt,
    token: victionTestnetTokens.wvic,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps