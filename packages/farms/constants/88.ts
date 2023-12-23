import { victionTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-WVIC LP',
    lpAddress: '0xbf0395D168AE8A1a73572158D25e8C94565f3cE1',
    quoteToken: victionTokens.wvic,
    token: victionTokens.zodiac,
  },

].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
