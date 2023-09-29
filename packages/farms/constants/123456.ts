import { pegoTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 34,
    vaultPid: 3,
    lpSymbol: 'ZODIAC-WPG LP',
    lpAddress: '0x8813D6BB24798468A9eDA5De4DabD68B625229b5',
    quoteToken: pegoTestnetTokens.wpg,
    token: pegoTestnetTokens.zodiac,
  },
  {
    pid: 23,
    vaultPid: 3,
    lpSymbol: 'LEET-WPG LP',
    lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
    quoteToken: pegoTestnetTokens.wpg,
    token: pegoTestnetTokens.leet,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
