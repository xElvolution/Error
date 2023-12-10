import { victionTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WVIC-USDT LP',
    lpAddress: '0x3DA5519039DDe84fde2748Bd05c279c9dA88EA12',
    quoteToken: victionTestnetTokens.usdt,
    token: victionTestnetTokens.wvic,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps