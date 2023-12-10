import { victionTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-WVIC LP',
    lpAddress: '0xcE4c5CD57365db031971596d0C672A1734604bbB',
    quoteToken: victionTestnetTokens.wvic,
    token: victionTestnetTokens.zodiac,
  },
  {
    pid: 35,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-USDT LP',
    lpAddress: '0x83C4949D260915Be5D54B69De888aF37521cEEFa',
    quoteToken: victionTestnetTokens.zodiac,
    token: victionTestnetTokens.usdt,
  },

].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
